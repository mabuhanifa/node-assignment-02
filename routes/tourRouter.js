const express = require("express");
const { getRandomTour, createTour } = require("../controllers/tourControllers");

const router = express.Router();

router.route("/api/v1/tour").get(getRandomTour);

/**
 @apply creating tour

**/
router.route("/api/v1/tour").post(createTour);

module.exports = router;
