import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios'
import users from "./MOCK_DATA.json" assert { type: "json" };

dotenv.config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
app.use(cors())

app.get("/", (req, res) => {
  const courses = [
    {
      id: 1,
      name: "Mayuri",
    },
    {
      id: 2,
      name: "Madhuri",
    },
    {
      id: 3,
      name: "Seema",
    },
    {
      id: 4,
      name: "Komal",
    },
    {
      id: 5,
      name: "Kajal",
    },
  ];
  res.send(courses);
});
app.get('/books', async(req,res)=>{
const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
res.json(response.data)
})
// app.get('/users',(req,res)=>{
//   const html=`
//   <ul>
//   ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//   </ul>
//   `
//   res.send(html);
// });
// app.get("/api/users", (req, res) => {
//   return res.json(users)
// });
//get with id
app.route("/api/users/:id").get((req,res)=>{
  const id=Number(req.params.id)
  const user=users.find((user)=>user.id===id);
  return res.json(user);
})


.post((req,res)=>{
  return res.json({status:'pending'})
})
.patch((req,res)=>{
  return res.json({status:'pending'})
})
app.delete((req,res)=>{
  return res.json({status:"pending"})
})
app.listen(port, () => {
  console.log(`server is running on http://${hostname}:${port}`);
});
