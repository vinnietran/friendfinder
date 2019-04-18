var express = require("express");
var path = require("path");
//var routes = require("./app/routing/htmlRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// routes.homeRoute;

// routes.surveyRoute;

// console.log(routes.vinnie);

// console.log(routes.homeRoute);

// console.log(routes.surveyRoute);

// // var surveyRoute = 
// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });

require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);