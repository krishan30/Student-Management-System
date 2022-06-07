var db = require("../../config/db.config");

const Result= function (result) {
    this.courseId = result.courseId;
    this.teacherId  = result.teacherId;
    this.releaseDate=result.releaseDate;
    this.batchId=result.batchId;
    this.grade=result.grade;
    this.studentId=result.studentId;
};
//create a result entry
Result.create = (newResult, result) => {
    db.query("INSERT INTO result (courseid, teacherid, releasedate, batchid,grade,studentid) values (?,?,?,?,?,?)", [newResult.courseId,newResult.teacherId,newResult.releaseDate,newResult.batchId,newResult.grade,newResult.studentId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, newResult);
    });
};
//Find a result entry for specific student
Result.findEntry=(courseId,studentId,result)=>{
    db.query(`SELECT releasedate,grade.gradename AS Grade FROM result JOIN grade ON result.grade=grade.gradeid WHERE studentid=${studentId} AND courseid=${courseId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found result: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
}

//Find a results of all courses for specific student
Result.findResultsOfAllCourses=(studentId,result)=>{

    db.query(`SELECT coursename,gradename  FROM result JOIN course  on result.courseid = course.courseid JOIN grade ON grade.gradeid=result.grade WHERE result.studentid=${studentId} ORDER BY result.releasedate DESC`, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
}
module.exports = Result;

