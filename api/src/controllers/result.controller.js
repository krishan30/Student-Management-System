const resultModel = require("../models/result.model");

// Create and Save a new result entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    // Create a result
    const result = new resultModel({
        courseId:req.body.courseId,
        teacherId:req.body.teacherId,
        releaseDate:req.body.releaseDate,
        batchId:req.body.batchId,
        grade:req.body.grade,
        studentId:req.body.studentId
    });

    // Save result in the database
    resultModel.create(result, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the result.",
            });
        else res.send(data);
    });
};

// get Grade of a specific student
exports.FindGradeByCourseIdAndStudentID = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    resultModel.findEntry(req.body.courseId,req.body.studentId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found result  ${req.body.studentId}.`,
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving result  " + req.body.studentId,
                });
            }
        } else res.send(data);
    });

}
exports.FindGradesOfCoursesByStudentId = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    resultModel.findResultsOfAllCourses(req.body.studentId,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving result details.",
            });
        else res.send(data);
    });
}

