/*class Inmuebles extends React.Component {

	constructor(props) {
		super(props);
	}

	getUrlvars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value) => {
      vars[key] = value;
    });
    return vars;
	}

	format(val) {
    return decodeURI(val).toLowerCase().trim();
  }

	checkUrl(elements, url, callback) {
    let getUrlVars = this.getUrlvars;
    let els = elements || [];
    if(this.format(getUrlVars()[url]).length > 0) {
      els = els.filter((post) => {
        return callback(this.format(post[url]), this.format(getUrlVars()[url]));
      });
    }
    return els;
  }
	
	getPosts() {

		let posts = this.props.posts;

    posts = this.checkUrl(posts, "neighborhood", (neighborhood, neighborhoodUrl) => {
      return neighborhood === neighborhoodUrl;
		});
		
		posts = this.checkUrl(posts, "kind", (type, typeUrl) => {
      return type === typeUrl;
    });

    return posts;
	}

	showData() {
		if(this.getPosts().length > 0) {
			return this.getPosts().map((post) => {
        return <Post key={post.id} post={post} />;
      });
		} else {
			return this.props.posts.map((post) => {
				return <Post key={post.id} post={post} />;
			});
		}
	}
	
	render() {
		
		return(
			<div className="inmuebles">
				<div className="wraper">	
					<Form 
						data={this.props.posts}
						getUrlvars={this.getUrlvars} />
					<div className="post-box">
						<div className="flex-posts">
							{(this.props.posts.length > 0) ? this.showData() : "No hay propiedades en venta"}
						</div>
					</div>
				</div>
			</div>
		);
	}
}*/