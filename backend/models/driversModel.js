//{
//	"name": "Max Verstappen",
//	"email": "Verstappen@f1.com",
//	"password": "qwe123456qwe",
//	"Team": "Red Bull Racing",
//	"Country":	"Netherlands",
//	"Podiums":	67,
//	"Points":	1732.5,
//	"Championships":	1,
//}

const { Schema, model } = require("mongoose");

const driverSchema = Schema(
  {
    name: {
      type: String,
      require: [true, "mongoose. Name is require"],
    },
    email: {
      type: String,
      require: [true, "mongoose. Email is require"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "mongoose. Password is require"],
    },
    points: {
      type: Number,
      default: 0,
    },
  },
  {}
);

module.exports = model("Driver", driverSchema);
