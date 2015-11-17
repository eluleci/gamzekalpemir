var InstagramItem = React.createClass({

  componentDidMount() {
  },
  render: function () {
    var post = this.props.post;

    return (
      <div className={"post instagram-post"}>
        <img className={"image-content"} src={post.src} />
        <p className={"content"}>
          {post.caption}
        </p>
        <div className={"author"}>
          <img className={"avatar"} src={post.user.profile_picture} />
          <span className={"name"}>{post.user.full_name}</span>
          <img className={"icon"} src={'./images/instagram.png'}/>
      </div>
      </div>
    );
  }
});