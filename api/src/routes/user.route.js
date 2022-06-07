const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Create a new user
router.post("/create", userController.create);
// update a user
router.post("/update", userController.updateProfile);
//get user details
router.get("/profile/:userId",userController.getDetailsById);
// user login
router.post("/login",userController.login);
// get next user ID
router.get("/nextId",userController.generateNextUserId);
module.exports = router;
