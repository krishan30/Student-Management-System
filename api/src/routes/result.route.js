const express = require("express");
const router = express.Router();
const resultController = require("../controllers/result.controller");

// Create a new result entry
router.post("/ResultDetails", resultController.create);
// Find result entry by courseid and studentid
router.get("/FindResult/:courseId/:studentId", resultController.FindGradeByCourseIdAndStudentID);
//Find results of courses by studentid
router.get("/AllResult/:studentId",resultController.FindGradesOfCoursesByStudentId);

module.exports = router;
