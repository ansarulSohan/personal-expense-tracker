const User = require("../models/User.model");
const { compare } = require("bcrypt");

/**
 * @function authUser(req,res)
 * @param {*} req
 * @param {*} res
 * @returns {msg: "logged in successfully"} on success
 *
 */

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log(`Invalid email: ${email}`);
    return res.status(404).send({ msg: "Incorrect email or password" });
  }
  const passwordMatched = await compare(password, user.password);
  if (!passwordMatched) {
    console.log(`Invalid password provided for email: ${email}`);
    return res.status(404).send({ msg: "Incorrect email or password" });
  }
  return res
    .setHeader("Authorization", `Bearer ${user.generateAuthToken()}`)
    .send({ msg: "Logged in successfully" });
};

module.exports = { authUser };
