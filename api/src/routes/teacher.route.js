const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher.controller");

// Create a new teacher
router.post("/tc", teacherController.create);
// Get Details of a teacher by id
router.post("/ti",teacherController.getDetailsById);
// Get All teachers details
router.get("/tall",teacherController.getAllTeachersDetails);

module.exports = router;
