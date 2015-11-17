var TwitterItem = React.createClass({displayName: "TwitterItem",

  getInitialState() {
    return {
    }
  },

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