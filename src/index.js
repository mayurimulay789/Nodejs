import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
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

app.get("/services", (req, res) => {
    res.send('welcome to service page');
});
app.listen(port, () => {
  console.log(`server is running on http://${hostname}:${port}`);
});
