const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    aiRecommendation
} = require("../controllers/aiController");

router.post("/recommend", protect, aiRecommendation);

module.exports = router;