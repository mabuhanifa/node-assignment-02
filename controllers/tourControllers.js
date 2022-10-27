const Tour = require("../models/tourModel");

const getRandomTour = (req, res) => {
  res.send({ a: "tour" });
};

const createTour = (req, res) => {
  const tour = new Tour(req.body);

  // tour.save();
  console.log(tour);
  res.send("Tour created successfully");
};
module.exports = { getRandomTour, createTour };
