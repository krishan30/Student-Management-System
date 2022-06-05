var db = require("../../config/db.config");

const Level= function () {
};

Level.getAllValues=(result)=>{
    let query = "SELECT * FROM level";
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
module.exports = Level;
