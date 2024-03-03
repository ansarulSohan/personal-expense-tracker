const { authUser } = require("../controllers/auth.controller");
const authValidation = require("../middlewares/validations/auth.validation");

const router = require("express").Router();

router.get("/").post("/", authValidation, authUser);

module.exports = router;
