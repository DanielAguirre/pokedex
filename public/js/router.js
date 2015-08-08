var pokemonController = new PokemonController();

var Router = Backbone.Router.extend({
	routes:{
		"": pokemonController.index,
		"pokemon/:name":pokemonController.getPokemon
	}
})