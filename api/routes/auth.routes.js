const express = require("express");
const path = require("path");
const authController = require("../controllers/auth.controller");
const router = express.Router();

/* router.get('/login', authController); */
router.post('/login', authController.postLogin);
/* router.post('/logout', authController); */
router.post('/signup', authController.postSignup);
/* router.get('/signup', authController); */

module.exports = router;