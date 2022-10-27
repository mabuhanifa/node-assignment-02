const Tour = require("../models/tourModel");

const getRandomTour = (req, res) => {
  res.send({ a: "tour" });
};

const createTour = async (req, res) => {
  const tour = new Tour(req.body);
   const result = await tour.save();
  res
    .status(200)
    .json({
      status: "success",
      message: "Tour created successfully",
      data: result,
    });
};
module.exports = { getRandomTour, createTour };
