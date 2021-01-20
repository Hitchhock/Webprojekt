const db = require("../../models");



module.exports = (req, res) => {
    db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
    });
    res.send("Die Datenbank wurde erfolgreich zurückgesetzt!");
}
