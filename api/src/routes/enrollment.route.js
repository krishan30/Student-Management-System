const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollment.controller");

router.post("/", enrollmentController.createEnrollment);
router.put("/unenroll/:id", enrollmentController.unenrollCourseByIds);


module.exports = router;