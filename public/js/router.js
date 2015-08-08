var Router = Backbone.Router.extend({
	routes:{
		"": PokemonController.index,
		"pokemon/:name": PokemonController.getPokemon
	}
})