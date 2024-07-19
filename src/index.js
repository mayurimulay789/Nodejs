import express from "express";
import cors from 'cors'
const app = express();
app.use(cors())
const portname = "localhost";
const port = 8000;
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
  ];
  res.send(courses);
});

app.get("/services", (req, res) => {
    res.send('welcome to service page');
});
app.listen(port, () => {
  console.log(`server is running on http://${portname}:${port}`);
});
