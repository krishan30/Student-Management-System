const courseModel = require("../models/course.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Customer = require("../models/course.model");

// Create course
exports.createCourse = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    // Create a course
    const course = new courseModel({
        CourseId: req.body.courseId,
        LevelId: req.body.levelId,
        CourseName: req.body.courseName,
        Description:req.body.description,
        Duration: req.body.duration,
        Credit: req.body.credit,
    });

    // Save customer in the database
    courseModel.createCourse(course, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the course.",
            });
        else res.send(data);
    });
};


// Retrieve all enrolled courses for given student id.
exports.getAllEnrolledCourses = (req, res) => {
    courseModel.getAllEnrolledCourses(req.params.sid,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving enrolled courses.",
            });
        else res.send(data);
    });
};

// Retrieve all courses details
exports.getAllCourses = (req, res) => {
    courseModel.getAllCourses((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving enrolled courses.",
            });
        else res.send(data);
    });
};

// Find a single course by Id
exports.findByCourseId = (req, res) => {
    courseModel.findByCourseId(req.params.cid, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found course with id ${req.params.cid}.`,
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Course with id " + req.params.cid,
                });
            }
        } else res.send(data);
    });
};
