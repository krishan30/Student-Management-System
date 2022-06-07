var db = require("../../config/db.config");

const Grade= function () {
};

Grade.getAllValues=(result)=>{
    let query = "SELECT * FROM grade";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("success");
            result(null, res);
        }
    });
}
module.exports = Grade;
