const mongoose = require("mongoose");
const validator = require("validator");

const tourSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
    min: [0, "Quantity can not be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true;
        } else {
          return false;
        }
      },
    },
    message: "Quantity must be an integer"
  },
});

// tour model 
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
