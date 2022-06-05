var db = require("../../config/db.config");

const Announcement = function (announcement) {
    this.AnnouncementId = announcement.AnnouncementId;
    this.Title = announcement.Title;
    this.Body = announcement.Body;
    this.CourseId = announcement.CourseId;
    this.TeacherId = announcement.TeacherId;
};

// Add course
Announcement.addAnnouncement = (newAnnouncement, result) => {
    db.query("INSERT INTO announcement SET ?", newAnnouncement, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created tutorial: ", { id: res.insertId, ...newAnnouncement });
        result(null, { announcementId: res.AnnouncementId, ...newAnnouncement });
    });
};

// Get all received announcements with given student id
Announcement.getAllAnnouncements = (studentId, result) => {
    let query = "SELECT * FROM announcement LEFT OUTER JOIN courseenrollment using(courseid) WHERE studentid = ?";
    db.query(query, [studentId], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
};

// Get recent 10 received announcements with given student id
Announcement.getRecentAnnouncements = (studentId, result) => {

    let query = "SELECT * FROM announcement LEFT OUTER JOIN courseenrollment using(courseid) WHERE studentid = ? ORDER BY announcementid DESC LIMIT 10";
    db.query(query, [studentId], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
};

// Get recent 10 received announcements with given student id
Announcement.getRecentCourseAnnouncements = (courseId, result) => {

    let query = "SELECT * FROM announcement  WHERE courseid = ? ORDER BY announcementid DESC LIMIT 10";
    db.query(query, [courseId], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
};

module.exports = Announcement;