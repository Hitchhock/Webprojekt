const db = require("../../models");
const Tutorial = db.tutorials;

var jsonSpecs;

var getSpecs = (req, res) => {
    Tutorial.findAll({
        where: {
            Tarifname: req.body.tarifname,
            PLZ: req.body.plz
        }
    })
        .then((data) => {
            dataSpecs = data;
            jsonSpecs = JSON.stringify(data);
            const obj = JSON.parse(jsonSpecs);
            res.send (obj[0]);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials.",
            });
        })
    
}; 

module.exports = {
    getSpecs
}


/*
var sql = "select * from tutorials where PLZ='73433'";
connection.query(sql, function (db_error, result) {
    if (db_error) throw db_error;
    res.send(result);
});*/