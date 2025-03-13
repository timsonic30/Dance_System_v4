//抓出工具
const express = require("express");
const router = express.Router();
const DanceClass = require("../models/danceClass");

router.get("/", async (req, res, next) => {
  try {
    let classData = await DanceClass.find({}).exec();
    console.log(classData)
    return res.send({ classData });

  } catch (e) {
    return res.send(e);
  }
});


//====20250313 start==============================

router.get("/classCreate", async (req, res, next) => {
  try {
    let classData = await DanceClass.findOne().exec();    
    return res.send({ classData });
  } catch (e) {
    return res.send(e);
  }
});


// 返回collection的schema結構
router.get('/schema', (req, res, next) => {
  const schema = DanceClass.schema.paths;  
  res.send({ schema });
});


//從前端到來的資料, 放入danceClass collection中
router.post('/classCreate', async (req, res, next) => {
  console.log(req.body)

  const { classCode, classType, danceStyle, teacher, numberOfStudent, level, date, startTime, endTime, description, price, lesson_duration, room, performanceDay, img } = req.body;

  const newDanceClass = new DanceClass({
    classCode, classType, danceStyle, teacher, numberOfStudent, level,
    date, startTime, endTime, description, price, lesson_duration, room, performanceDay, img
  });

  newDanceClass
    .save()
    .then((savedDoc) => {
      console.log("儲存完畢, 資料是:");
      console.log(savedDoc);
      res.send({response:'ok'})
    })
    .catch((e) => {
      console.log(e);
    });

})

//====20250313 end==============================




//export此module到index.js
//index.js要用const danceClass = require("./routes/danceClass");接收
//index.js要用app.use("/danceClass", danceclass);將request轉過來
module.exports = router;
