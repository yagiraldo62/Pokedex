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
	const pokemons = getStorage();
	if (pokemons && offset === 0) return Promise.resolve(pokemons);
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
				if (offset === 0) saveStorage(pokemons);
			})
			.catch((err) => reject(err));
	});
};

const saveStorage = (data) => {
	localStorage.setItem('pokemons', JSON.stringify(data));
};

const getStorage = () => {
	const pokemons = localStorage.getItem('pokemons');
	return pokemons ? JSON.parse(pokemons) : null;
};
