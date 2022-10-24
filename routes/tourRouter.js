const express = require("express");
const getRandomTour = require("../controllers/tourControllers");

const router = express.Router();

router.route("/").get(getRandomTour);

module.exports = router;