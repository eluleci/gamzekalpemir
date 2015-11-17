var TwitterItem = React.createClass({displayName: "TwitterItem",

  componentDidMount() {
    console.log('here: twitter')
  },
  render: function () {
    console.log(this.props)
    var post = this.props.post;

    return (
      React.createElement("div", {className: "post twitter-post"}, 
        React.createElement("p", {className: "content"}, 
          post.text
        ), 
        React.createElement("div", {className: "author"}, 
          React.createElement("img", {className: "avatar", src: post.user.profile_image_url.replace("_normal", "")}), 
          React.createElement("span", {className: "name"}, post.user.name)
      )
      )
    );
  }
});