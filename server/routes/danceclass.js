//抓出工具
const express = require("express");
const router = express.Router();
const DanceClass = require("../models/danceClass");

router.get("/", async (req, res, next) => {  
  try {
    let classData = await DanceClass.find({}).exec();
    return res.send({classData});
  } catch (e) {
    return res.send(e);
  }
});

//export此module到index.js
//index.js要用const danceClass = require("./routes/danceClass");接收
//index.js要用app.use("/danceClass", danceclass);將request轉過來
module.exports = router;
