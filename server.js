
var express = require("express");
var bodyParser = require("body-parser");
var compression = require('compression');
var dbConfig = require("./config/database.config.js");


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(compression());
app.use('/', express.static(__dirname + '/www'));

var server = require('http').Server(app);

var PORT = 8080;

//server.listen(process.env.PORT, function () {
server.listen(process.env.PORT, function () {
    console.log("Server is listening on port "+process.env.PORT);
});
require('./app/routes/note.routes.js')(app);