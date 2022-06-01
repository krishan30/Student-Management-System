const express = require("express");
const router = express.Router();
const batchController = require("../controllers/batch.controller");

// Get current batch details
router.get("/BatchDetails",batchController.getCurrentBatchesDetails);


module.exports = router;
