var PokemonController = (function(){
	var pokemonCollection =  new PokemonCollection();
	
	function index(){
		$.when(pokemonCollection.deferred).done(function(){
			pokemonCollection.models.forEach(function(pokemon){
				console.log("res",pokemon);
			});
		})
	}
	
	function getPokemon(name){
		console.log("getPokemon");
	}

	return{
		index: index,
		getPokemon: getPokemon
	}
}());