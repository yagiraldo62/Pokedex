import { INC_POKEMONS_OFFSET } from '../actionTypes';

let pokemonOffset = 0;

export default (state = pokemonOffset, action) => {
	switch (action.type) {
		case INC_POKEMONS_OFFSET:
			return state + 1;
		default:
			return state;
	}
};
