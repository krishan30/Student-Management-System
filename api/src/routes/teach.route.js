const express = require("express");
const router = express.Router();
const teachController = require("../controllers/teach.controller");

// Create a new teach entry
router.post("/", teachController.createTeach);
// Change availability in entry
router.put("/change/:cid/:tid/:aid", teachController.setTeachAvailabilityById);
// Find availability in entry
router.get("/find/:cid/:tid", teachController.getAvailabilityName);


module.exports = router;
