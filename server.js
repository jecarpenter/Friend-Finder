var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app/public"));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(port, () => console.log("Listening on port ", port));