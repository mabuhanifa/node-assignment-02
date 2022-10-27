const Tour = require("../models/tourModel");
const errorHandler = require("../middleware/errorHandler");
const getRandomTour = (req, res) => {
  res.send({ a: "tour" });
};

const createTour = async (req, res) => {
  try {
    const tour = new Tour(req.body);
    const result = await tour.save();
    res.status(200).json({
      status: "success",
      message: "Tour created successfully",
      data: result,
    });
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getRandomTour, createTour };
