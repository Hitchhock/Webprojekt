const express = require("express");
const router = express.Router();
const specController = require("../controllers/specs/spec.controller");
const vergleichController = require("../controllers/vergleich/vergleich.controller");
const csvController = require("../controllers/tutorials/csv.controller");
const reset = require("../controllers/reset/res.db.controller");
const buchung = require("../controllers/buchung/buch.controller");
const portal = require("../middlewares/portal");
const upload = require("../middlewares/upload");




let routes = (app) => {
    router.post("/upload", upload.single("file"), csvController.upload);
    router.get("/specs", portal, specController.getSpecs);
    router.get("/vergleich", portal, vergleichController.getSpecs);
    router.get("/tutorials", portal, csvController.getTutorials);
    router.post("/reset", portal, reset);
    router.post("/buchung", portal, buchung);

    app.use("/api/csv", router);
};

module.exports = routes;