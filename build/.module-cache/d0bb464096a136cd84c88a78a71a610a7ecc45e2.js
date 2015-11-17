
var url = 'http://cengalabs.com/gamzekalpemir/search.php?q=gamzekalpemir';

var MainController = React.createClass({displayName: "MainController",

  getInitialState() {
    return {
      currentIndex: 0,
      posts: []
    }
  },

  componentDidMount() {

    this._fetchTweets()

    var parent = this;
    setInterval(function () {
      parent._increaseIndex();
    }, 5000);
  },

  render: function () {

    if (this.state.posts.length == 0) {
      return (React.createElement("div", null, "-"));
    }

    var post = this.state.posts[this.state.currentIndex];

    if (post.platform == "twitter") {
      return (
        React.createElement(TwitterItem, {post: this.state.posts[this.state.currentIndex]})
      );
    } else if (post.platform == "instagram") {
      return (
        React.createElement(InstagramItem, {post: this.state.posts[this.state.currentIndex]})
      );
    }

  },

  _fetchTweets(){

    var parent = this;
    $.get(url, function (data) {
      console.log(data);
      parent.setState({posts: data, currentIndex: 0})
    });
  },

  _increaseIndex(){
    var currentIndex = this.state.currentIndex;
    if (currentIndex < this.state.posts.length) {
      this.setState({currentIndex: ++currentIndex});
    } else {
      this._fetchTweets();
    }
  }
});

React.render(
  React.createElement(MainController, null),
  document.getElementById('container')
);