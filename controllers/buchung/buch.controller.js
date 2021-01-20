const db = require("../../models");
const Buchung = db.buchung;


var reqBuchung = async (req, res) => {
    try {
        if (req.body.portal == undefined) {
            res.send("Please enter inquiries origin!");
        } else {
            Buchung.create({
                tarif: req.body.tarif,
                kosten: req.body.kosten,
                empfaenger: req.body.empfaenger,
            });
            res.send("Buchung erfolgreich");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Upload failed",
        });
    }
};

module.exports = reqBuchung;