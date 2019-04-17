var express = require("express")
var path = require("path")

var app = express();

var homeRoute = app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//add corrtect paths to html files



var surveyRoutes = app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

module.exports = {
    homeRoute: homeRoute,
    surveyRoute: surveyRoutes
}

