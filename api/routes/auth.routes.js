const express = require("express");
const path = require("path");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);
router.post('/signup', authController.postSignup);

module.exports = router;