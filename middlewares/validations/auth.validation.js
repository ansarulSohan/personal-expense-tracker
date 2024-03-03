const { check } = require("express-validator");

module.exports = authValidation = [
  check("email").isEmail().notEmpty(),
  check("password").isString().notEmpty(),
];
