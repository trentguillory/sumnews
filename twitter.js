var Twitter = require('twitter');
var fs = require("fs");

//Initiate Twitter client
var client = new Twitter({
  consumer_key: 'rk5OVzySRsjd5xZ9RgKMrse5u',
  consumer_secret: 'pFfeBPsrYUfsHL7nsAmDdQlZMQQlb3reaGS6MgWRtqCF8BWC3V',
  access_token_key: '3281731194-O0AZ70Edp23qI6sGdDxMlEm2z1MqGUHH4Auwj9l',
  access_token_secret: 'Y3QFfwbbvqgCvjvnDW5OWtlG3wsN7kJG4iySW6Taf0yrH'
});

//Get latest tweets (20) and find the most popular one

//initializing for passing
var tweetText = "";
var tweetPop = 0;

function getTweets(username) {
  client.get('statuses/user_timeline', {screen_name: username}, function(error, tweets, response){
    if(error) throw error;
    var length = tweets.length;
    var popularity = 0;
    var indexOfPop = 0;
    
    for (var i=0; i < length; i++) {
      if (tweets[i].retweet_count + tweets[i].favorite_count > popularity) {
        popularity = tweets[i].retweet_count + tweets[i].favorite_count;
        indexOfPop = i;
      }
    }
    
    // Saving top tweet info to temp variables
    tweetText = tweets[indexOfPop].text;
    tweetPop = popularity;
    /*
    // Initializing for file IO
    var date = new Date();
    var fileName = date.getMonth() + "-" + date.getDay() + "-" + date.getFullYear() + ".txt";
    var newmessage = username + "\n" + tweetText + "\n" + tweetPop + "\n";
    
    // Check if file exists for this date
    fs.readFile(fileName, function (err, data) {
      if (err) throw err;
      console.log(data.toString('utf-8'));
    });
      // Check if top tweet from this chunk is more popular than last.
        // If it is, save to file
        // If it is not, return what we already have.
    
    // Saving top tweet info to file
    
    fs.writeFile(fileName, newmessage, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
    */
    
    // Saving top tweet info to temp variables
    tweetText = tweets[indexOfPop].text;
    tweetPop = popularity;
 
  });
  return tweetText;
}

function getTweetPop() {
  return tweetPop;
}



module.exports.getTweets = getTweets;
module.exports.getTweetPop = getTweetPop;