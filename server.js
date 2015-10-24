var express = require('express');
var port = 8080;
var app = express();
 

app.use(express.static(__dirname + "/public"));

app.listen(port);

console.log("listening on " + port);