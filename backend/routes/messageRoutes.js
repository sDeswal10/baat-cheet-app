const express = require("express");
const { sendMessage, getMessages } = require("../controllers/messageController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/send/:id", authMiddleware ,sendMessage);
router.get("/:id", authMiddleware, getMessages);

module.exports = router;