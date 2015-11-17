var searchTerm = 'gamzekalpemir',
  numOfTweets = 10,
  url = 'http://cengalabs.com/gamzekalpemir/server.php?q=' + searchTerm + '&count=' + numOfTweets;

var MainController = React.createClass({displayName: "MainController",

  getInitialState() {
    return {
      currentIndex: 0,
      posts: []
    }
  },

  componentDidMount() {

    this._fetchTweets()

    setInterval(function () {
      // method to be executed;
    }, 5000);
  },

  render: function () {
    console.log(this.state.posts[this.state.currentIndex])
    if (this.state.posts.length > 0) {
      return (
        React.createElement(TwitterItem, {tweet: this.state.posts[this.state.currentIndex]})
      );
    } else {
      return (React.createElement("div", null, "-"));
    }
  },

  _fetchTweets(){

    var parent = this;
    $.get(url, function (data) {
      console.log(data);
      parent.setState({posts: data.statuses})
    });
  },

  _increaseIndex(){
    var currentIndex = this.state.currentIndex;
    if (++currentIndex <= this.state.posts.length) {
      this.setState({currentIndex: currentIndex});
    } else {
      this.setState({currentIndex: 0});
    }
  }
});

React.render(
  React.createElement(MainController, null),
  document.getElementById('container')
);