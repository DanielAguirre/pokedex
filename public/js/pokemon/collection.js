var PokemonCollection = Backbone.Collection.extend({	
	url:'http://pokeapi.co/api/v1/pokedex/1/',
	
	parse:function(response){
		return response.pokemon
	},

	initialize: function () {
        this.deferred = this.fetch();
    }
})