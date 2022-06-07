const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

// Create a new student
router.post("/sc", studentController.create);
// Get Details of a student by id
router.get("/sc/:studentId", studentController.getDetailsById);
// Get All students details
router.get("/sall", studentController.getAllStudentsDetails);
// Get student id
router.get("/scui/:userId",studentController.getStudentIdByUserID);

module.exports = router;
