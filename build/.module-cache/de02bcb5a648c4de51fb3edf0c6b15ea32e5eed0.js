var TwitterItem = React.createClass({displayName: "TwitterItem",

  componentDidMount() {
    console.log('here: twitter')
  },
  render: function () {
    console.log(this.props)
    return (
      React.createElement("div", {class: "post twitter-post"}, 
        React.createElement("h1", null, 
          this.props.tweet.text
        )
      )
    );
  }
});