const express = require("express");
const router = express.Router();
const levelController = require("../controllers/level.controller");

// Get level details
router.get("/LevelDetails", levelController.getAllDetails);


module.exports = router;
