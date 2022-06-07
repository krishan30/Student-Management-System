const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcement.controller");

router.get("/:id", announcementController.getAllAnnouncements);
router.get("/student/:id", announcementController.getRecentAnnouncements);
router.get("/course/:id", announcementController.getRecentCourseAnnouncements);
router.post("/", announcementController.addAnnouncement);

module.exports = router;