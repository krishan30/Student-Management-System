var db = require("../../config/db.config");

const Teacher = function (teacher) {
    this.userID  = teacher.userID ;

};

//create account
Teacher.create = (teacher, result) => {
    db.query("INSERT INTO teacher (userid) VALUES (?)", [teacher.userID], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, teacher);
    });
};


//View teacher Details
Teacher.getDetailsById = (teacherId, result) => {
    db.query(`SELECT * FROM teacher JOIN user ON teacher.userid = user.userid WHERE teacherid=${teacherId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found teacher: ", res[0]);
            result(null, res[0]);
            return;
        }


        result({ kind: "not_found" }, null);
    });
};

//get all teachers details
Teacher.getAllTeachersDetails = (result) => {
    let query = "SELECT * FROM teacher JOIN user  on teacher.userid = user.userid";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
};

Teacher.getTeacherIdByUserId=(userId, result) => {
    db.query(`SELECT teacherid FROM teacher WHERE userid=?`,userId,(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found teacherid: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}

module.exports = Teacher;
