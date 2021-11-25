const express = require("express");
const userController  = require("../controllers/userController");
const router = express.Router();

// router.route("/reg").post(registerUser);

router.post("/register", userController.register)
router.post("/login", userController.login)
module.exports = router;