const express = require("express");
const { getRandomTour, createTour } = require("../controllers/tourControllers");

const router = express.Router();

router.route("").get(getRandomTour);

/**
 @apply creating tour

**/
router.route("/").post(createTour);

module.exports = router;
