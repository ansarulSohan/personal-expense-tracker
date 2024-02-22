require("dotenv").config();
require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = process.env.PORT || 3000;

// Middleware
const app = express();
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Server running at port " + PORT);
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
