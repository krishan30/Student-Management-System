var db = require("../../config/db.config");

const Course = function (course) {
    this.CourseId = course.CourseId;
    this.LevelId = course.LevelId;
    this.CourseName = course.CourseName;
    this.Description = course.Description;
    this.Duration = course.Duration;
    this.Credit = course.Credit;
};

// Add course
Course.createCourse = (newCourse, result) => {
    db.query("INSERT INTO course SET ?", newCourse, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, newCourse);
    });
};


//find course by course ID
Course.findByCourseId = (id, result) => {
    console.log(id)
    db.query(`SELECT * FROM course WHERE CourseId = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found course: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

//get all courses enrolled by student with given student id
Course.getAllCourses = (result) => {
    db.query("SELECT * FROM course", [], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
};

//get all courses enrolled by student with given student id
Course.getAllEnrolledCourses = (studentId, result) => {
    let query = "SELECT course.courseid, course.levelid, course.coursename, course.duration, course.credit FROM courseenrollment, course WHERE studentid = ? AND course.courseid = courseenrollment.courseid AND finisheddate IS NULL";
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

module.exports = Course;
