var db = require("../../config/db.config");

const Batch= function () {
};

Batch.getCurrentBatchesDetails=(result)=>{
    let query = "SELECT batchid,year FROM batch WHERE endeddate IS NULL";
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

module.exports = Batch;
