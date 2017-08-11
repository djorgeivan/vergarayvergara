class Inmuebles extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			matches: []
		}
	}

	getFilteredData(values) {
		this.setState({
			matches: this.props.posts.filter((post) => {
				return post.neighborhood.trim().toLowerCase() === values.neighborhood.trim().toLowerCase();
			})
		});
	}

	showData() {
		console.log(this.props.posts);
		if(this.state.matches.length > 0) {
			return this.state.matches.map((post) => {
				return <Post key={post.id} post={post} />
			});
		} else {
			return this.props.posts.map((post) => {
				return <Post key={post.id} post={post} />
			});
		}
	}
	
	render() {
		return(
			<div className="inmuebles">
				<div className="wraper">	
					<Form 
						getFilteredData={this.getFilteredData.bind(this)} />
					<div className="post-box">
						<div className="flex-posts">
							{(this.props.posts.length > 0) ? this.showData() : "No hay propiedades en venta"}
						</div>
					</div>
				</div>
			</div>
		);
	}
}