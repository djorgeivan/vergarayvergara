class Inmuebles extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			area: 200,
			priceMin: 1,
			priceMax: 30,
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

	setCriteria(values) {
		console.log(values);
	}


	getData() {
		console.log(this.props.posts);
	}

	render() {
		this.getData();
		return(
			<div className="inmuebles">
				<Form 
					area={this.state.area}
					priceMin={this.state.priceMin}
					priceMax={this.state.priceMax}
					updatePrice={this.updatePrice.bind(this)}
					updateArea={this.updateArea.bind(this)}
					setCriteria={this.setCriteria.bind(this)} />
				<div className="post-box">
					
				</div>
			</div>
		);
	}
}