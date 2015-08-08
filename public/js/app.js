function Application(){
	this.router = new Router();	
	Backbone.history.start({
		pushState: true,
		silent: false
	});
}

new Application();