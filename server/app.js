const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const port = 3030;

app.use(bodyParser.json());
app.use(cors());
app.use(logger("dev"));

const indexRouter = require("./routes/index"); // The location of the file
const memberRouter = require("./routes/member"); // The location of the file
const danceClass = require("./routes/danceclass"); //課程的資料

app.use("/", indexRouter);
app.use("/member", memberRouter);
app.use("/danceClass", danceClass);

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
