var Twitter = require('twitter');

//Initiate Twitter client
var client = new Twitter({
  consumer_key: 'rk5OVzySRsjd5xZ9RgKMrse5u',
  consumer_secret: 'pFfeBPsrYUfsHL7nsAmDdQlZMQQlb3reaGS6MgWRtqCF8BWC3V',
  access_token_key: '3281731194-O0AZ70Edp23qI6sGdDxMlEm2z1MqGUHH4Auwj9l',
  access_token_secret: 'Y3QFfwbbvqgCvjvnDW5OWtlG3wsN7kJG4iySW6Taf0yrH'
});

//Get latest tweets (20) and find the most popular one

var tweetText = "";
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
    // Saving top tweet to temp variable
    tweetText = tweets[indexOfPop].text;
    //console.log(tweets[indexOfPop].text);
    //console.log(tweets[indexOfPop].retweet_count + tweets[indexOfPop].favorite_count);  // The favorites. 
    //console.log(response);  // Raw response object. 
  });
  return tweetText;
}

module.exports.getTweets = getTweets;