const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

// Create a new student
router.post("/sc", studentController.create);
// Get Details of a student by id
router.post("/sc",studentController.getDetailsById);
// Get All students details
router.post("/sall",studentController.getAllStudentsDetails);

module.exports = router;
