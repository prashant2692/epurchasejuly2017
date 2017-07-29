/**
 * Created by prash on 28-07-2017.
 */

var express = require('express');
var app = express();

var port = 8080 || process_params.env.port;

app.listen(port, function (req, res) {
    console.log("Server is sunning on : "+port);
});

app.get('/', function (req, res) {
    res.sendfile(__dirname+'/index.html');
});

app.post('/login', function (req, res) {
    res.end("You have successfully logged in!");
});