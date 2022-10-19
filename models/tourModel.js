const mongoose = require("mongoose");
const validator = require("validator");

const tourSchema = mongoose.Schema({
  name: {
    type: "string",
  },
});
 
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;