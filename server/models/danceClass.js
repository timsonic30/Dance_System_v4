const mongoose = require("mongoose");
const { Schema } = mongoose;

//課程collection部份
const danceClassSchema = new Schema({
  classCode: String,
  classType: {
    type: String,
    enum: [
      "Regular Class",
      "Pop Up Class",
      "Workshop Class",
      "Showcase Class",
      "Other Class",
    ],
  },
  danceStyle: {
    type: String,
    enum: ["Heels Dance", "Chair Dance", "Jazz Funk", "Twerk", "Hip Hop", "House", "Poping", "Locking", "Girls Hip Hop", "Urban", 'Conternporary', 'Waacking', 'K-pop', 'Breaking'],
  },
  teacher: String,
  numberOfStudent: String,
  level: { type: String, enum: ["beginner", "Open style"] },
  date: { type: Date },
  startTime: { type: String },
  endTime: { type: String },
  description: String,
  price: { type: Number },
  lesson_duration: [{ type: Date }],
  room: { type: String, enum: ["Room X", "Room L", "Room XL"] },
  performanceDay: { type: Date },
  img:{ type: String },
  createdAt: { type: Date, default: Date.now },
});
const DanceClass = mongoose.model("DanceClass", danceClassSchema);

module.exports = DanceClass;

//save到mongodb的範例
// const newDanceClass = new DanceClass({  
  
//   classCode: "HS002",
//     classType: "Pop Up Class",
//     danceStyle: "House",
//     teacher: "Liam",
//     numberOfStudent: "12",
//     level: "Open style",
//     date: new Date("2025-04-05"),
//     startTime: "19:00",
//     endTime: "20:30",
//     description: "體驗 House 的輕快節奏與腳步律動。",
//     price: 2200,
//     lesson_duration: [new Date("2025-04-05"), new Date("2025-04-20")],
//     room: "Room L",
//     performanceDay: new Date("2025-04-20"),
//     img: "https://cdn.midjourney.com/5433ed61-1712-41a4-bbc7-709eecbe9bb8/0_3.png",
  


// });
// newDanceClass
//   .save()
//   .then((savedDoc) => {
//     console.log("儲存完畢, 資料是:");
//     console.log(savedDoc);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
