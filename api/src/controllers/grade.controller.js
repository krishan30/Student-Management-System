const gradeModel = require("../models/grade.model");


// get all grade details
exports.getAllDetails = (req, res) => {
    console.log(req);
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    gradeModel.getAllValues( (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Grade details.",
            });
        else res.send(data);
    });

}


