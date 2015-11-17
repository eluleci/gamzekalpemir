var InstagramItem = React.createClass({displayName: "InstagramItem",

  componentDidMount() {
    console.log('here: twitter')
  },
  render: function () {
    console.log(this.props)
    var post = this.props.post;

    return (
      React.createElement("div", {className: "post twitter-post"}, 
        React.createElement("p", {className: "content"}, 
          post.caption
        ), 
        React.createElement("div", {className: "author"}, 
          React.createElement("img", {className: "avatar", src: post.user.profile_picture}), 
          React.createElement("span", {className: "name"}, post.user.full_name)
      )
      )
    );
  }
});