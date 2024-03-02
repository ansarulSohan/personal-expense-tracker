const mongoose = require("mongoose");

const connectDB = async () => {
  const dbURI =
    process.env.DB_URI || "mongodb://localhost:27017/personal_expense_tracker";

  try {
    await mongoose.connect(dbURI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.log("An error occured in the database.", err);
  });

  mongoose.connection.on("disconnected", (err) => {
    console.log("Database disconnected");
    process.exit(1);
  });
};

module.exports = connectDB;
