const teacherModel = require("../models/teacher.model");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;


// Create and Save a new teacher account
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

    // Create a new teacher Account
    const newTeacher = new teacherModel({
        userID:req.body.userId,
    });

    userModel.create(newUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user.",
            });
        else teacherModel.create(newTeacher,(err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the teacher.",
                });
            else res.send(data);
        });
    });


};

exports.getDetailsById = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    teacherModel.getDetailsById(req.body.teacherId, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found teacher with id ${req.body.teacherId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding teacher with id " + req.body.teacherId
                });}
        else res.send(data);
    });
}

exports.getAllTeachersDetails = (req, res) => {

    teacherModel.getAllTeachersDetails((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred.",
            });
        else res.send(data);
    });

}
exports.getTeacherIdByUserID=(req, res) =>{

    teacherModel.getTeacherIdByUserId(req.params.userId, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found teacher with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding teacher with id " + req.params.userId
                });}
        else res.send(data);
    });
}

