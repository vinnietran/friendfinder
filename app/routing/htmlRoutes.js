var express = require("express")
var path = require("path")

var app = express();

var joe = "Vinnie rules"


// var homeRoute = 
//function homeRoute(){
module.exports = function (app) {

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//add corrtect paths to html files



// var surveyRoute = 
//function surveyRoute(){
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
};





