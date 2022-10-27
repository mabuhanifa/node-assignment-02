const mongoose = require("mongoose");
const validator = require("validator");

const tourSchema = mongoose.Schema({
  name: {
    type: "string",
    unique: [true, "name must be unique"],
  },
  price: {
    type: Number,
    required: true,
  },
});

// tour model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
