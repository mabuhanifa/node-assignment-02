const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const colors = require("colors");
const tourRouter = require("./routes/tourRouter");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log(`MONGODB CONNECTED`.red.bold);
});

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/tour", tourRouter);

app.get("/", (req, res) => {
  res.send("Node Application Server Running");
});

app.all("*", (req, res) => {
  res.send(`No Route found`);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// errorHandler for unrecognized error types
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
