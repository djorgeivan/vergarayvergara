class Form extends React.Component {


	slider(id, props) {
		$('#' + id).slider(props).bind(this);
	}

	addMinSlider(id, min, max, val) {
		this.slider(id, {
			range: "min", min: min, max: max, value: val,
			slide: ( event, ui ) => {
				this.props.updateArea(ui.value);
			}
		});
	}

	addSlider(id, min, max, val) {
		this.slider(id, {
			range: true, min: min, max: max, values: val,
			slide: ( event, ui ) => {
				this.props.updatePrice(ui.values[0], ui.values[1]);
			}
		});
	}

  componentDidMount() {
		let values = this.props;
		this.addMinSlider("slider-range-min", 1, 300, values.area);
		this.addSlider("slider", 1, 30, [values.priceMin, values.priceMax]);
  }

	sendFilteredData() {
		this.props.getFilteredData({
			city: city.value,
			neighborhood: neighborhood.value,
			inmuebles: tipo.value,
			area: this.props.area,
			priceMin: this.props.priceMin,
			priceMax: this.props.priceMax,
		});
	}

	showPrice(price, value) {
		return (price <= value) ? price * 10000000 : price;
	}

	render() {
		return(
			<div className="form">
				<form className="form-box">
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
						<p>Area: {this.props.area} m²</p>
						<div className="slider" id="slider-range-min"></div>
					</div>

					<div className="form-group">
						<p>Precio: ${this.showPrice(this.props.priceMin, 1)} - 
											 ${this.showPrice(this.props.priceMax, 30)} COP</p>
						<div className="slider" id="slider"></div>
					</div>
		
					<input type="button" value="Buscar" onClick={this.sendFilteredData.bind(this)} />
				</form>
			</div>
		);
	}
}