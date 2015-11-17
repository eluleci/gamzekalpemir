var TwitterItem = React.createClass({displayName: "TwitterItem",

  componentDidMount() {
  },
  render: function () {
    var post = this.props.post;

    if (post.src.length == 0) {
      return (
        React.createElement("div", {className: "post twitter-post"}, 
          React.createElement("p", {className: "content"}, 
            post.caption
          ), 

          React.createElement("div", {className: "author"}, 
            React.createElement("img", {className: "avatar", src: post.user.profile_image_url.replace("_normal", "")}), 
            React.createElement("span", {className: "name"}, post.user.name)
          )
        )
      );
    }
    else {
      return (
        React.createElement("div", {className: "post twitter-post with-image"}, 
          React.createElement("img", {className: "image-content", src: post.src}), 

          React.createElement("p", {className: "content"}, 
            post.caption
          ), 

          React.createElement("div", {className: "author"}, 
            React.createElement("img", {className: "avatar", src: post.user.profile_image_url.replace("_normal", "")}), 
            React.createElement("span", {className: "name"}, post.user.name), 
            React.createElement("img", {className: "icon", src: '../images/twitter.png'})
          )
        )
      );
    }
  }
});