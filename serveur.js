var http = require('http');
var url = require('url');
var express = require('express');

//instanciate server
var server = express();
server.listen(8080);

var options = {
    root: __dirname
};

server.get('/', function (request, response) {
    response.sendFile('./lvlEditor.html', options);
});
