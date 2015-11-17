var url = 'http://cengalabs.com/gamzekalpemir/search.php?q=gamzekalpemir';

var MainController = React.createClass({displayName: "MainController",

  getInitialState() {
    return {
      currentIndex: 0,
      posts: [],
      isPendingRequest: false
    }
  },

  componentDidMount() {

    this._fetchTweets()

    /*var parent = this;
     setInterval(function () {
     parent._increaseIndex();
     }, 2000);*/
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

    this.setState({isPendingRequest: true})

    var parent = this;
    $.get(url, function (data) {
      console.log(data);
      parent.setState({posts: data, currentIndex: 0, isPendingRequest: false})

      if (this.state.timer !== null) return;
      var timer = setInterval(function () {
        console.log('here')
        parent._increaseIndex();
      }, interval);

      parent.setState({timer: timer});
    });
  },

  _increaseIndex(){
    if (this.state.isPendingRequest) return;

    var currentIndex = this.state.currentIndex;
    if (currentIndex + 1 < this.state.posts.length) {
      this.setState({currentIndex: ++currentIndex});
    } else {
      console.log('should fetch tweets')
      clearInterval(this.state.timer);
      this.setState({timer: null});
      this._fetchTweets();
    }
  }
});

React.render(
  React.createElement(MainController, null),
  document.getElementById('container')
);