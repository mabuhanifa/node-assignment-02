const Tour = require("../models/tourModel");

const getRandomTour = (req, res) => {
  res.send({ a: "tour" });
};

/**
 @apply creating tour
**/

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
    res.status(400).json({
      status: "failed",
      message: "Tour could not created",
      error: error.message,
    });
  }
};

module.exports = { getRandomTour, createTour };
