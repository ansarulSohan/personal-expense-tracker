const User = require("../models/User.model");
const hashPassword = require("../utils/hashPass.util");

const getUser = async (req, res) => {
  const { id } = req.user;
  const userProfile = await User.findById(id);
  if (!userProfile) {
    return res.status(404).send({ msg: "User not found!" });
  }
};

/**
 * @function createUser
 * @description Controller to create new users, returns new user on success, return error msg on error
 * @param {*} req
 * @param {*} res
 * @returns user
 * @returns {msg: "User already exists"} on error
 */

const createUser = async (req, res) => {
  const { username, email, phone, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).send({ msg: "User already exists" });
  user = new User({
    username,
    email,
    phone,
    password: await hashPassword(password),
  });
  user = await user.save();
  res.send(user);
};

module.exports = { getUser, createUser };
