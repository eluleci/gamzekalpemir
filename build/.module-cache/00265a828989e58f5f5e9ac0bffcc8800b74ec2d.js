//Callback functions
var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  console.log('Data [%s]', data);
};

//var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
/*var config = {
  "consumerKey": "XXX",
  "consumerSecret": "XXX",
  "accessToken": "XXX",
  "accessTokenSecret": "XXX",
  "callBackUrl": "XXX"
}

var twitter = new Twitter(config);*/

var MainController = React.createClass({displayName: "MainController",

  componentDidMount() {
    console.log('here')

    $.get("https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi", function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
      "Hello, world! I am a CommentBox."
    )
    );
  }
});
React.render(
React.createElement(MainController, null),
  document.getElementById('content')
);