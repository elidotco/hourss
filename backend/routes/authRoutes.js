const express = require("express");
const { login, register } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.post("/register", authMiddleware, register); // Only allow authenticated users

module.exports = router;
