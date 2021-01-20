const db = require("../../models");
const Tutorial = db.tutorials;

var jsonSpecs;

var calcPrice = (data, req) => {
    var FixKosten = Number(String(data["Fixkosten"]).replace(',', '.'));
    var VarKosten = Number(String(data["VariableKosten"]).replace(',', '.'));
    var Volumen = Number(req.body.volumen);
    var gesamtKosten = FixKosten + VarKosten * Volumen;
    return String(gesamtKosten);
};

var getSpecs = (req, res) => {
    Tutorial.findAll({
        where: {
            PLZ: req.body.plz
        }
    })
        .then((data) => {
            jsonSpecs = JSON.stringify(data);
            const obj = JSON.parse(jsonSpecs);
            if (req.body.tarifname == undefined) {
                var priceBs = calcPrice(obj[0], req);
                var priceBsF = calcPrice(obj[1], req);
                var priceBsFP = calcPrice(obj[2], req);
                var priceJSON = { "Bio-Strom": priceBs, "Bio-Strom Flex": priceBsF, "Bio-Strom Flex Plus": priceBsFP }
                res.send(priceJSON);
            } else {
                var a;
                if (req.body.tarifname == "Bio-Strom") { a = 0; }
                else if (req.body.tarifname == "Bio-Strom Flex") { a = 1; }
                else if (req.body.tarifname == "Bio-Strom Flex Plus") { a = 2; }
                else { res.send ("Wählen Sie einen existierenden Tarif"); }
                res.send(calcPrice(obj[a], req));
            }
            
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