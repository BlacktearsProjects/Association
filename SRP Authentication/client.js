// Affiche de toutes les données saisies ou choisies

var userElt = document.getElementById("username");
var passElt = document.getElementById("password");

user = userElt.value ;
pass = passElt.value ;

var http = require('http');

//The url we want is "http://localhost:8080/api/"
var options = {
  host: "http://localhost:8080/api/",
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '8080',
  //This is what changes the request to a POST request
  method: 'POST'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.send("hello world!");
