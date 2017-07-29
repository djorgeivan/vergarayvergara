class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			area: 200,
			priceMin: 1,
			priceMax: 30,
			toggle: false
		}
	}

	slider(id, props) {
		$('#' + id).slider(props).bind(this);
	}

	addMinSlider(id, min, max, val) {
		this.slider(id, {
			range: "min", min: min, max: max, value: val,
			slide: ( event, ui ) => {
				this.updateArea(ui.value);
			}
		});
	}

	addSlider(id, min, max, val) {
		this.slider(id, {
			range: true, min: min, max: max, values: val,
			slide: ( event, ui ) => {
				this.updatePrice(ui.values[0], ui.values[1]);
			}
		});
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

  componentDidMount() {
		let values = this.state;
		this.addMinSlider("slider-range-min", 1, 300, values.area);
		this.addSlider("slider", 1, 30, [values.priceMin, values.priceMax]);

		this.toggleButton();
  }

	sendFilteredData() {
		this.props.getFilteredData({
			city: city.value,
			neighborhood: neighborhood.value,
			inmuebles: tipo.value,
			area: this.state.area,
			priceMin: this.state.priceMin,
			priceMax: this.state.priceMax,
		});
	}

	showPrice(price, value) {
		return (price <= value) ? price * 10000000 : price;
	}

	toggleButton() {
		let button = document.getElementById("formbtn");
		button.addEventListener("click", () => {
			this.setState({
				toggle: !this.state.toggle
			});
		});
	}

	toggleFilter() {
		return (this.state.toggle) ? 'showForm' : 'hideForm';
	}

	render() {
		return(
			<div className={ 'form ' + this.toggleFilter() }>
				<form id="formid" className="form-box">
					<h3>Filtros</h3>

					<div className="form-group">
						<input id="city" type="text" placeholder="Ciudad" />
						<input id="neighborhood" type="text" placeholder="Barrio" />
					</div>

					<select id="tipo" name="inmuebles">
						<option value="casas">Casas</option>
						<option value="apartamentos">Apartamentos</option>
						<option value="lotes">Lotes</option>
						<option value="fincas">Fincas</option>
						<option value="bodegas">Bodegas</option>
					</select>

					<div className="form-group">
						<p>Area: {this.state.area} m²</p>
						<div className="slider" id="slider-range-min"></div>
					</div>

					<div className="form-group">
						<p>Precio: ${this.showPrice(this.state.priceMin, 1)} - 
											 ${this.showPrice(this.state.priceMax, 30)} COP</p>
						<div className="slider" id="slider"></div>
					</div>
		
					<input type="button" value="Buscar" onClick={this.sendFilteredData.bind(this)} />
				</form>
			</div>
		);
	}
}