var db = require("../../config/db.config");

const Student = function (student) {
    this.batchID = student.batchID;
    this.userID  = student.userID ;
};

//create account
Student.create = (newStudent, result) => {
    db.query("INSERT INTO student (batchid,userid) VALUES (?,?)", [newStudent.batchID, newStudent.userID], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, newStudent);
    });
};


//View Student Details
Student.getDetailsById = (studentId, result) => {
    db.query(`SELECT * FROM student JOIN user on student.userid = user.userid WHERE studentid=${studentId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found student: ", res[0]);
            result(null, res[0]);
            return;
        }


        result({ kind: "not_found" }, null);
    });
};

//get all students Details
Student.getAllStudentsDetails = (result) => {
    let query = "SELECT * FROM student JOIN user on student.userid = user.userid";
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
Student.getStudentIdByUserId=(userId, result) => {
    db.query(`SELECT studentid FROM student WHERE userid=?`,userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found studentid: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
}


module.exports = Student;


