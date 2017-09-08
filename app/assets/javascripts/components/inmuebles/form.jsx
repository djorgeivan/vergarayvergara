class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			area: 2,
			priceMin: 1,
			priceMax: 30,
			toggle: false
		}
	}

	getUrlvars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value) => {
      vars[key] = value;
    });
    return vars;
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
		this.addMinSlider("slider-range-min", 1, 5, values.area);
		this.addSlider("slider", 1, 90, [values.priceMin, values.priceMax]);

		this.toggleButton();
	}
	
	setDefaultValue(value) {
    if(this.getUrlvars()[value]) {
      return decodeURI(this.getUrlvars()[value]).split("+").join(" ").trim();
    } 
  }

	sendFilteredData(e) {
		e.preventDefault();
		let city = this.city.value,
				neighborhood = this.neighborhood.value
				kind = this.kind.value;
				area = this.showArea(this.state.area, 5);
				priceMax = this.state.priceMax,
				priceMin = this.state.priceMin;
    window.location = "http://localhost:3000/inmuebles/?" + 
                      "city=" + encodeURIComponent(city) + "&" +
											"neighborhood=" + encodeURIComponent(neighborhood) + "&" +
											"kind=" + encodeURIComponent(kind) + "&" + 
											"area=" + encodeURIComponent(area) + "&" + 
											"priceMax=" + encodeURIComponent(priceMax) + "&" + 
											"priceMin=" + encodeURIComponent(priceMin);
		
	}

	showPrice(price, value) {
		return (price <= value) ? price * 10000000 : price;
	}

	showArea(area, value) {
		return (area <= value) ? area * 100 : area;
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


	areaText() {

		if(this.showArea(this.state.area, 5) < 500) {
			return <p>Area de hasta: </p>
		} else {
			return <p>Area mayor a: </p>
		}
	}

	render() {
		return(
			<div className={ 'form ' + this.toggleFilter() }>
				<form id="formid" className="form-box" onSubmit={this.sendFilteredData.bind(this)} >
					<h3>Filtros</h3>

					<div className="form-group">
						<input 
							type="text" 
							placeholder="Ciudad" 
							defaultValue={this.setDefaultValue("city")}
							ref={(input) => { this.city = input } }/>

						<input 
							type="text" 
							placeholder="Barrio"
							defaultValue={this.setDefaultValue("neighborhood")}
							ref={(input) => { this.neighborhood = input }} />
					</div>

					<select 
						name="inmuebles"
						selected={this.setDefaultValue("type")}
						ref={(input) => { this.kind = input }}
						defaultValue="">
							<option value="casa"> -- Casa -- </option>
							<option value="apartamento"> -- Apartamento -- </option>
							<option value="lote"> -- Lote --</option>
							<option value="finca"> -- Finca -- </option>
							<option value="bodega"> -- Bodega -- </option>
					</select>

					<div className="form-group">
						<div> {this.areaText()} {this.showArea(this.state.area, 5)} m²</div>
						<div className="slider" id="slider-range-min"></div>
					</div>

					<div className="form-group">
						<p>Precio: ${this.showPrice(this.state.priceMin, 1)} - 
											 ${this.showPrice(this.state.priceMax, 90)} COP</p>
						<div className="slider" id="slider"></div>
					</div>
		
					<input type="submit" value="Buscar"/>
				</form>
			</div>
		);
	}
}