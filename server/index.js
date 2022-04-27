const express = require("express");
const cors = require("cors");

const app = express();

// middlewares

app.use(cors({credentials: true,origin:"http://localhost:5000"}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// listening on port

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server listening in port:", PORT);
});



app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ name: "aayush", age: 26 });
});

app.post("/", (req, res) => {
  console.log(req.body);    
  res.setHeader("Content-Type", "application/json");
  res.status(300).json({ redirect: true });
});

app.delete("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(404).json("not allowed");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.header("Access-Control-Allow-Credentials", true);
  res.cookie("test", "application", {
    httpOnly: false,
  });
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({ message: "you are welcome" });
});
