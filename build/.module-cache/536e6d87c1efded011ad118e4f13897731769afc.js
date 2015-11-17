var TwitterItem = React.createClass({displayName: "TwitterItem",

  componentDidMount() {
    console.log('here: twitter')
  },
  render: function () {
    console.log(this.props)
    var tweet = this.props.tweet;

    return (
      React.createElement("div", {className: "post twitter-post"}, 
        React.createElement("p", {className: "content"}, 
          tweet.text
        ), 
        React.createElement("div", {className: "author"}, 
          React.createElement("img", {src: tweet.user.profile_image_url})
      )
      )
    );
  }
});