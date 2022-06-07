var db = require("../../config/db.config");

const Teach = function (teach) {
    this.CourseId = teach.CourseId;
    this.TeacherId = teach.TeacherId;
    this.AvailabilityId = teach.AvailabilityId;
};

// Add new teacher with course
Teach.createTeach = (newTeach, result) => {
    db.query("INSERT INTO teaches SET ?", newTeach, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, newTeach);
    });
};


Teach.setTeachAvailabilityById = (CourseId, TeacherId, AvailabilityId, result) => {
    db.query(
        "UPDATE teaches SET  AvailabilityId= ? WHERE CourseID = ? AND TeacherId = ?",
        [AvailabilityId, CourseId, TeacherId],
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

            console.log("Teach availability id changed");
            result(null,  { CourseId: CourseId, TeacherId: TeacherId, AvailabilityId: AvailabilityId });
        }
    );
};

// Find teaching availability by availability ID
Teach.getAvailabilityName = (CourseId, TeacherId, result) => {
    db.query(`SELECT * FROM Teaches WHERE CourseID = ${CourseId} AND TeacherId = ${TeacherId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Teach availability found");

            db.query(`SELECT * FROM Availability WHERE AvailabilityId = ${res[0]}`, (err2, res2) => {
                if (err2) {
                    console.log("error: ", err2);
                    result(err2, null);
                    return;
                }

                if (res2.length) {
                    console.log("Teach availability name found");
                    result(null, res[0]);
                    return;
                }
                result({ kind: "not_found availability name" }, null);
            });
        }

        result({ kind: "not_found availability id" }, null);
    });
};



module.exports = Teach;