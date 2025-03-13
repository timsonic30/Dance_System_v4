const mongoose = require("mongoose");
const { Schema } = mongoose;

//課程collection部份
const roomRentalSchema = new Schema({
    roomType: {
      type: String,
      enum: ['Room x', 'Room L', 'Room XL'],
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    time: {
      type: Date,
      required: true
    },
    price: {
      type: Schema.Types.Decimal128,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    rentalType: {
      type: String,
      enum: ['Class', 'Private'],
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

const RoomRental = mongoose.model("RoomRental", roomRentalSchema);

module.exports = RoomRental;