const teachModel = require("../models/teach.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Customer = require("../models/course.model");

// Create teach
exports.createTeach = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const teach = new teachModel({
        CourseId: req.body.courseId,
        TeacherId: req.body.teacherId,
        AvailabilityId: req.body.availabilityId
    });

    teachModel.createTeach(teach, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while registering the teaching.",
            });
        else res.send(data);
    });
};


// Change availability for teaching by given details
exports.setTeachAvailabilityById = (req, res) => {
    teachModel.setTeachAvailabilityById(req.params.cid, req.params.tid, req.params.aid,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while changing the availability in teaching.",
            });
        else res.send(data);
    });
};

// Retrieve availability name for teaching
exports.getAvailabilityName = (req, res) => {
    teachModel.getAvailabilityName(req.params.cid, req.params.tid,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving availability name in teaching.",
            });
        else res.send(data);
    });
};