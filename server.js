var express = require("express");
var bodyParser = require("body-parser");
var apiroutes = require("./app/routing/apiroutes.js");
var htmlroutes = require("./app/routing/htmlroutes.js");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, function() {
    console.log("listening at localhost:" + PORT);
});