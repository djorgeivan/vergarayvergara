class Inmuebles extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			area: 200,
			priceMin: 1,
			priceMax: 30,
			matches: []
		}
	}

	updatePrice(val1, val2) {
		this.setState({
			priceMin: (val1 * 10000000),
			priceMax: (val2 * 10000000)
		});
	}

	updateArea(val) {
		this.setState({
			area: val
		});
	}

	getFilteredData(values) {
		this.setState({
			matches: this.props.posts.filter((post) => {
				return post.neighborhood.trim() === values.neighborhood.trim();
			})
		});
	}

	showData() {
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
				<Form 
					area={this.state.area}
					priceMin={this.state.priceMin}
					priceMax={this.state.priceMax}
					updatePrice={this.updatePrice.bind(this)}
					updateArea={this.updateArea.bind(this)}
					getFilteredData={this.getFilteredData.bind(this)} />
				<div className="post-box">
					{(this.props.posts.length > 0) ? this.showData() : "No hay propiedades en venta"}
				</div>
			</div>
		);
	}
}