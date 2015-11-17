var InstagramItem = React.createClass({displayName: "InstagramItem",

  componentDidMount() {
  },
  render: function () {
    var post = this.props.post;

    return (
      React.createElement("div", {className: "post instagram-post"}, 
        React.createElement("img", {className: "image-content", src: post.src}), 
        React.createElement("p", {className: "content"}, 
          post.caption
        ), 
        React.createElement("div", {className: "author"}, 
          React.createElement("img", {className: "avatar", src: post.user.profile_picture}), 
          React.createElement("span", {className: "name"}, post.user.full_name), 
          React.createElement("img", {className: "icon", src: './images/twitter.png'})
      )
      )
    );
  }
});