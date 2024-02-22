const mongoose = require("mongoose");

const connectDB = () => {
  const dbURI =
    process.env.DB_URI || "mongodb://localhost:27017/personal_expense_tracker";
  mongoose.connect(uri, (error) => {
    console.log("Error while connecting to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("An error occured in the database.", err);
  });
};

module.exports = connectDB;
