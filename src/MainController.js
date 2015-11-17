
var hashTag = 'gamzekalpemir';
var url = 'http://cengalabs.com/gamzekalpemir/search.php?q=' + hashTag;

var MainController = React.createClass({

  getInitialState() {
    return {
      currentIndex: 0,
      posts: [],
      isPendingRequest: false
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
      return (<div>-</div>);
    }

    var post = this.state.posts[this.state.currentIndex];

    if (post.platform == "twitter") {
      return (
        <TwitterItem post={this.state.posts[this.state.currentIndex]}/>
      );
    } else if (post.platform == "instagram") {
      return (
        <InstagramItem post={this.state.posts[this.state.currentIndex]}/>
      );
    }

  },

  _fetchTweets(){

    this.setState({isPendingRequest: true})

    var parent = this;
    $.get(url, function (data) {
      console.log(data);
      parent.setState({posts: data, currentIndex: 0, isPendingRequest: false})
    });
  },

  _increaseIndex(){
    if (this.state.isPendingRequest) return;

    var currentIndex = this.state.currentIndex;
    if (currentIndex + 1 < this.state.posts.length) {
      this.setState({currentIndex: ++currentIndex});
    } else {
      this._fetchTweets();
    }
  }
});

React.render(
  <MainController />,
  document.getElementById('container')
);