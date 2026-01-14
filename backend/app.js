import express from "express";
import connectdb from "./db/dbConifg.js";
import userModel from "./models/userModels.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { authMiddlewares } from "./middlewares/authmiddleware.js";
const app = express();

app.use(express.json());
connectdb();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to travel EX server",
  });
});

app.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await userModel.findOne({ email: data.email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email Already Registered",
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await userModel.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser._id }, "secret");

    res.status(200).json({
      message: "Registered Successfully",
      token,
      newUser,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/profile/me", authMiddlewares, async (req, res) => {
  try {
    const user = await userModel.findById(req.userID).select("-password");
    // console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
