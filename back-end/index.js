const express = require("express");
const app = express();
const port = 8080;
const connectDB = require("./db/dbConnection");
const User = require("./db/user");
const cors = require("cors");

//Middleware for parsing JSON
app.use(express.json());

//Enable cors
app.use(cors());

//Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration Failed" });
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

connectDB();

app.listen(port, () => {
  console.log("server is running on 8080");
});
