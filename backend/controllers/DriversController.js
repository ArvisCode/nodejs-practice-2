const driverModel = require("../models/driversModel");

const asyncHandler = require("express-async-handler");

class DriversController {
  save = asyncHandler(async (req, res) => {
    const isExists = await driverModel.findOne({
      email: req.body.email,
    });

    if (isExists) {
      res.status(400).json({
        message: "Driver ready exist",
        code: 400,
      });
      throw new Error("Driver ready exist");
    }

    const driver = await driverModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      points: req.body.points,
    });

    await driver.save();

    res.status(201).json({
      message: "OK",
      code: 201,
      data: driver,
    });
  });

  getAll(req, res) {
    res.send("get all");
  }

  getOne(req, res) {
    res.send("get one");
  }

  update(req, res) {
    res.send("update");
  }

  remove(req, res) {
    res.send("remove");
  }
}

module.exports = new DriversController();
