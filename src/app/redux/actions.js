import {
	ADD_POKEMONS,
	INC_POKEMONS_OFFSET,
	SET_FIRST_LOADING,
	SET_CURRENT_LOADING,
	SET_ACTIVE_POKEMON,
	SET_POKEMON_SPECIE_DATA,
} from './actionTypes';

export const addPokemons = (pokemon) => {
	return {
		type: ADD_POKEMONS,
		payload: pokemon,
	};
};

export const incPokemonsOffset = () => {
	return {
		type: INC_POKEMONS_OFFSET,
	};
};

export const setFirstLoading = (flag) => {
	return {
		type: SET_FIRST_LOADING,
		payload: flag,
	};
};

export const setCurrentLoading = (flag) => {
	return {
		type: SET_CURRENT_LOADING,
		payload: flag,
	};
};

export const setActivePokemon = (index) => {
	return {
		type: SET_ACTIVE_POKEMON,
		payload: index,
	};
};

export const setPokemonSpecieData = ({ name, data }) => {
	return {
		type: SET_POKEMON_SPECIE_DATA,
		payload: { name, data },
	};
};
