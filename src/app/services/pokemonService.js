import Pokedex from '../Pokedex';

export const getPokemonInfo = (name) => {
	return Pokedex.getPokemonByName(name);
};

export const getPokemonSpecie = (name) => {
	return new Promise((resolve, reject) => {
		Pokedex.getPokemonSpeciesByName(name)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const getPokemons = async ({ limit, offset }) => {
	return new Promise((resolve, reject) => {
		Pokedex.getPokemonsList({
			limit,
			offset,
		})
			.then(async (res) => {
				let promises = [];
				const pokemons = res.results.map((pokemon) => {
					promises.push(getPokemonInfo(pokemon.name));
					pokemon.active = false;
					return pokemon;
				});

				const pokemonData = await Promise.all(promises);
				pokemonData.forEach((data, i) => {
					pokemons[i] = { ...pokemons[i], ...data };
				});
				resolve(pokemons);
			})
			.catch((err) => reject(err));
	});
};
