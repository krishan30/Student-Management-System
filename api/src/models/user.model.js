var db = require("../../config/db.config");

const User = function (user) {
    this.userId = user.userId;
    this.userTypeId = user.userTypeId ;
    this.firstName  = user.firstName ;
    this.lastName = user.lastName;
    this.contactNumber = user.contactNumber;
    this.address = user.address;
    this.NIC=user.NIC;
    this.registrationDate=user.registrationDate;
    this.email=user.email;
    this.password=user.password;
};

//register
User.create = (newUser, result) => {
    db.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Entry Added: ", { id: res.insertId, ...newUser });
        result(null, { userId: res.userid, ...newUser });
    });
};
//Update A User
User.updateProfile = (user, result) => {
    db.query(
        "UPDATE user SET  contactnumber= ?, address = ?,email=?,password=? WHERE userid = ?",
        [user.contactNumber,user.address, user.email,user.password,user.userId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated user: ",res);
            result(null,res);
        }
    );
};

//View user Details
User.getDetailsById = (userId, result) => {
    db.query(`SELECT * FROM user WHERE userid = ?`,userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};
//Get number of users
User.getNumberOfUsers= ( result) => {
    let query = "SELECT COUNT(*) AS userCount FROM user";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res[0]["userCount"]);
        }
    });
}
module.exports = User;
