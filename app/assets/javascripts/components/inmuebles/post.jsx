class Post extends React.Component {
	render() {
    let post = this.props.post;
		return(
      <div className="posts-box-post">
        <h1>{post.title}</h1>
      </div>
		);
	}
}