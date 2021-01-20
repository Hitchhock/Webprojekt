const db = require("../models");
const Portal = db.portal;


var reqPortal = async (req, res, next) => {
    try {
        if (req.body.portal == undefined) {
            res.send("Please enter inquiries origin!");
        } else {
            Portal.create({
                origin: req.body.portal,
                request: req.originalUrl,
            });
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Upload failed",
        });
    }
};

module.exports = reqPortal;