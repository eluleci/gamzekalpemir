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

  getInitialState() {
    return {
      currentIndex: 0,
      posts: []
    }
  },

  componentDidMount() {
    console.log('here')

    var searchTerm = 'gamzekalpemir',
      numOfTweets = 10,
      url = 'http://cengalabs.com/gamzekalpemir/server.php?q=' + searchTerm + '&count=' + numOfTweets;

    var parent = this;
    $.get(url, function (data) {
      console.log(data);
      parent.setState({posts: data})
    });
  },
  render: function() {
    return (
      React.createElement(TwitterItem, {tweet: this.state.posts[currentIndex]})
    );
  }
});

React.render(
React.createElement(MainController, null),
  document.getElementById('content')
);