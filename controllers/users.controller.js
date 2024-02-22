const User = require("../models/users");

const getUser = (req, res) => {
  const { user } = req.user;
  const userProfile = User.find({ user });
  if (!userProfile) {
  }
};

const createUser = (req, res) => {};
