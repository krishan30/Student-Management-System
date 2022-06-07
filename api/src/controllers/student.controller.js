const studentModel = require("../models/student.model");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;


// Create and Save a new student account
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    // Create a new User Account
    const newUser = new userModel({
        userId:req.body.userId,
        userTypeId:req.body.userTypeId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        contactNumber:req.body.contactNumber,
        address:req.body.address,
        NIC:req.body.NIC,
        registrationDate:req.body.registrationDate,
        leaveDate:req.body.leaveDate,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, salt)
    });

    // Create a new student Account
    const newStudent = new studentModel({
        batchID:req.body.batchId,
        userID:req.body.userId,
    });

    userModel.create(newUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user.",
            });
        else studentModel.create(newStudent,(err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the student.",
                });
            else res.send(data);
        });
    });
};
// get details about an student account By using student ID
exports.getDetailsById = (req, res) => {

    studentModel.getDetailsById(req.params.studentId, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found student with id ${req.params.studentId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding student with id " + req.params.studentId
                });}
        else res.send(data);
    });
}

exports.getAllStudentsDetails = (req, res) => {

    studentModel.getAllStudentsDetails((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred.",
            });
        else res.send(data);
    });

}
exports.getStudentIdByUserID=(req, res) =>{

    studentModel.getStudentIdByUserId(req.params.userId, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found student with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding student with id " + req.params.userId
                });}
        else res.send(data);
    });
}

