const express = require("express");
const router = express.Router();
const gradeController = require("../controllers/grade.controller");

// Get Grade details
router.get("/GradeDetails", gradeController.getAllDetails);


module.exports = router;
