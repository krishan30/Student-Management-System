const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

// Create and Save a new account
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

    // Save account in the database
    userModel.create(newUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user.",
            });
        else res.send(data);
    });
};

//Update user's profile
exports.updateProfile= (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const user = new userModel({
        userId:req.body.userId,
        contactNumber:req.body.contactNumber,
        address:req.body.address,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, salt)
    });

    userModel.updateProfile(user, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.body.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating user with id " + req.body.userId
                });}
        else res.send(data);
    });

};

//Get user profile details
exports.getDetailsById = (req, res) => {

    userModel.getDetailsById(req.params.userId, (err, data) => {
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding user with id " + req.params.userId
                });}
        else res.send(data);
    });
}

//login
exports.login = (req, res) => {
    userModel.getDetailsById(req.body.userId, (err, user) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with ID ${req.body.userId}.`,
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.body.userId,
                });
            }
        } else {
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                res.status(401).json("Wrong credentials!");
            } else {
                const accessToken = jwt.sign(
                    {
                        userid: user.userid,
                        usertype: user.usertypeid
                    },
                    process.env.JWT_SEC,
                    {expiresIn: "2d"}
                );
                const { Password, ...others } = user;

                res.status(200).json({ ...others, accessToken });
            }
        }
    });
};
//Generate Next User Id
exports.generateNextUserId=(req, res) => {
    userModel.getNumberOfUsers((err, userCount) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while getting the user ID.",
            });
            else {
                if (userCount === 0) userCount = 1;
                let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                userCount = userCount.toString();
                let userId = "1";
                userId += userCount.padStart(5, '0');
                let charactersLength = characters.length;
                userId += characters.charAt(Math.floor(Math.random() * charactersLength));
                res.send({nextUserId:userId});
            }
    });


}

