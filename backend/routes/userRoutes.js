const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getUsersForSidebar } = require("../controllers/userController");
const router = express.Router();

router.get("/",authMiddleware, getUsersForSidebar);

module.exports = router;