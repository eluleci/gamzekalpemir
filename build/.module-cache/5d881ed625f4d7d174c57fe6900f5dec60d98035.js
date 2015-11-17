var TwitterItem = React.createClass({displayName: "TwitterItem",

  componentDidMount() {
    console.log('here: twitter')
  },
  render: function() {
    return (
      React.createElement("h1", null, 
        this.props.tweet.text
      )
    );
  }
});