const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Member = require("../models/member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://wazine6513:Ab123456@erb.3et5k.mongodb.net/project?retryWrites=true&w=majority&appName=ERB"
  )
  .then(() =>
    console.log("Pinged your deployment. You successfully connected to MongoDB")
  )
  .catch((err) => console.error("MongoDB connection error:", err));

router.post("/information", async (req, res, next) => {
  // const {} = req.body.objectId;
  console.log("here", req.body.objectId);
  try {
    const user = await Member.findOne({ _id: new ObjectId(req.body.objectId) });
    console.log(user);
    return res.json({
      username: user.username,
      phone: user.phone,
      email: user.email,
      gender: user.gender,
      birthday: user.dateOfBirth,
      point: user.point,
    });
  } catch (err) {
    throw new Error("Server Error");
  }
});

router.post("/edit", async (req, res, next) => {
  const { editField, editValue } = req.body;
  const ID = "67d1257e4d1fcb94294fb6af";
  const updateObject = { [editField]: editValue };
  console.log(updateObject);
  try {
    const user = await Member.updateOne(
      { _id: new ObjectId(ID) },
      { $set: updateObject }
    );
    console.log(user);
    return res.send(`Successfully update ${editField}`);
  } catch (err) {
    throw new Error("Server Error");
  }
});

module.exports = router;
