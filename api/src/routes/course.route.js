const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");


router.post("/", courseController.createCourse);
router.get("/", courseController.getAllCourses);
router.get("/:sid", courseController.getAllEnrolledCourses);
router.get("/find/:cid", courseController.findByCourseId);

module.exports = router;