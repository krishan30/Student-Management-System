const levelModel = require("../models/level.model");


// get all level details
exports.getAllDetails = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    levelModel.getAllValues( (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving level details.",
            });
        else res.send(data);
    });

}


