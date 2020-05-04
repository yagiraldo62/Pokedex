import { ADD_POKEMONS, SET_ACTIVE_POKEMON, SET_POKEMON_SPECIE_DATA } from '../actionTypes';

let localStoragedPokemons = [];

export default (pokemons = localStoragedPokemons, action) => {
	switch (action.type) {
		case ADD_POKEMONS:
			return [...pokemons, ...action.payload];

		case SET_ACTIVE_POKEMON:
			return pokemons.map((pokemon, i) => {
				pokemon.active = false;
				pokemon.stats.map((stat) => {
					stat.stat.name = stat.stat.name
						.replace('special', 'sp')
						.replace('attack', 'att')
						.replace('defense', 'def');
				});
				if (i === action.payload) {
					pokemon.active = true;
				}
				return pokemon;
			});

		case SET_POKEMON_SPECIE_DATA:
			const { name, data } = action.payload;
			return pokemons.map((pokemon, i) => {
				if (pokemon.name === name) {
					pokemon = { ...pokemon, ...data };
				}
				return pokemon;
			});
		default:
			return pokemons;
	}
};
