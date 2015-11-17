var TwitterItem = React.createClass({

  componentDidMount() {
  },
  render: function () {
    var post = this.props.post;

    if (post.src.length == 0) {
      return (
        <div className={"post twitter-post"}>
          <p className={"content"}>
            {post.caption}
          </p>

          <div className={"author"}>
            <img className={"avatar"} src={post.user.profile_image_url.replace("_normal", "")}/>
            <span className={"name"}>{post.user.name}</span>
            <img className={"icon"} src={'./images/twitter.png'}/>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className={"post twitter-post with-image"}>
          <img className={"image-content"} src={post.src}/>

          <p className={"content"}>
            {post.caption}
          </p>

          <div className={"author"}>
            <img className={"avatar"} src={post.user.profile_image_url.replace("_normal", "")}/>
            <span className={"name"}>{post.user.name}</span>
            <img className={"icon"} src={'./images/twitter.png'}/>
          </div>
        </div>
      );
    }
  }
});