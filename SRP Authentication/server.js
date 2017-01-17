// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    res.setHeader('Content-Type', 'text/plain');
    res.send(username + ' ' + password);
    console.log ("user = " username + "pass = " + password);
});
// start the server
// app.use will take into account the errors 404 not found
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});
app.listen(port);
console.log('Server started! At http://localhost:' + port);
