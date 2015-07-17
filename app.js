var http = require("http");
var router = require("./router.js");
var twitter = require("./twitter.js")

var commonHeaders = {'Content-Type': 'text/html'};

//Create a webserver
http.createServer(function (request, response) {
  router.home(request, response);
  //router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

console.log(twitter.getTweets("nytimes"));

