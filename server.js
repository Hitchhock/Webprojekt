const express = require("express");
const app = express();
const initRoutes = require("./routes/spec.route");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./models");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);
db.sequelize.sync();

let port = 8079;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});