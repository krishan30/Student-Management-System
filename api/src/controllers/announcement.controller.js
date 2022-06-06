const announcementModel = require("../models/announcement.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Create announcement
exports.addAnnouncement = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    // Create an announcement
    const announcement = new announcementModel({
        Title : req.body.Title,
        Body : req.body.Body,
        CourseId : req.body.CourseId,
        TeacherId : req.body.TeacherId,
        BatchId :req.body.BatchId
    });

    // Save announcement in the database
    announcementModel.addAnnouncement(announcement, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the announcement.",
            });
        else res.send(data);
    });
};

// Retrieve all announcements for given student id.
exports.getAllAnnouncements = (req, res) => {

    announcementModel.getAllAnnouncements(req.params.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving received announcements.",
            });
        else res.send(data);
    });
};

// Retrieve recent 10 announcements for given student id.
exports.getRecentAnnouncements = (req, res) => {

    announcementModel.getRecentAnnouncements(req.params.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving received announcements.",
            });
        else res.send(data);
    });
};

// Retrieve recent 10 announcements for given student id.
exports.getRecentCourseAnnouncements = (req, res) => {

    announcementModel.getRecentCourseAnnouncements(req.params.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving received announcements.",
            });
        else res.send(data);
    });
};
