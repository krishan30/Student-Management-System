const enrollmentModel = require("../models/enrollment.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Enrollment = require("../models/enrollment.model");

// Create new enrollment
exports.createEnrollment = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    // Create an enrollment
    const enrollment = new enrollmentModel({
        StudentId: req.body.StudentId,
        CourseId: req.body.CourseId,
        EnrolledDate: new Date().toISOString().slice(0, 10),
        FinishedDate: null,
    });

    // Save customer in the database
    enrollmentModel.createEnrollment(enrollment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the course.",
            });
        else res.send(data);
    });
};


// Update a Tutorial identified by the id in the request
exports.unenrollCourseByIds = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    let selectedEnrollment = new Enrollment(req.body);

    Enrollment.unenrollCourseByIds(
        selectedEnrollment.StudentId,
        selectedEnrollment.CourseId,
        (err, enrollment) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.id
                    });
                }
            } else res.send(enrollment);
        }
    );
};