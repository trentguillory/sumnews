var twitter = require("./twitter.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeaders = {'Content-Type': 'text/html'};

//Handle HTTP route GET / and POST (home route)
function home(request, response) {
  
  //Store the values which we need
  var values = {
  nytimesTweet: twitter.getTweets("nytimes")
  }
      
  response.writeHead(200, commonHeaders);
  renderer.view("header", {}, response);
  renderer.view("body", values, response);
  renderer.view("footer", {}, response);
  response.end();             
}

/*              
//Handle HTTP route GET /:username i.e. /trentguillory
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);
    
    //get JSON from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON) {
      //show profile
      
      //Store the values which we need
      var values = {
       avatarURL: profileJSON.gravatar_url,
       username: profileJSON.profile_name,
       badges: profileJSON.badges.length,
       javascriptPoints: profileJSON.points.JavaScript
      }
      //Simple response
      renderer.view("body", values, response);
      renderer.view("footer", {}, response); 
      response.end();
    });
    //on "error
    studentProfile.on("error", function(error) {
      //show error
      renderer.view("header", {errorMessage: error.messeage}, response);
      renderer.view("body", {}, response); 
      renderer.view("footer", {}, response);
      response.end();
    }); 
  }
}
*/

module.exports.home = home;
//module.exports.user = user;
