var db = require("../../config/db.config");

const Enrollment = function (enrollment) {
    this.StudentId = enrollment.StudentId;
    this.CourseId = enrollment.CourseId;
    this.EnrolledDate = enrollment.EnrolledDate;
    this.FinishedDate = enrollment.FinishedDate;
};

// Enroll new course
Enrollment.createEnrollment = (newEnrollment, result) => {
    db.query("INSERT INTO courseenrollment SET ?", newEnrollment, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, newEnrollment);
    });
};

Enrollment.unenrollCourseByIds = (StudentId, CourseId, result) => {

    db.query(
        "UPDATE courseenrollment SET  FinishedDate= ? WHERE CourseID = ? AND StudentId = ? AND FinishedDate IS NOT NULL",
        [new Date().toISOString(), CourseId, StudentId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            result(null,  { StudentId: StudentId, CourseId: CourseId });
        }
    );
};

module.exports = Enrollment;