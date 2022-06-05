const batchModel = require("../models/batch.model");


// get current batches details
exports.getCurrentBatchesDetails = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    batchModel.getCurrentBatchesDetails( (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Batch details.",
            });
        else res.send(data);
    });

}


