import React, { useState, useEffect } from 'react';
import { addPokemons, incPokemonsOffset, setFirstLoading, setCurrentLoading } from '../app/redux/actions';
import { connect } from 'react-redux';
import { getPokemons } from '../app/services/pokemonService';

import PokemonList from './design/PokemonList/';

const mapDispatchToProps = (dispatch) => {
	return {
		AddPokemons: (pokemons) => dispatch(addPokemons(pokemons)),
		IncPokemonsOffset: () => dispatch(incPokemonsOffset()),
		SetFirstLoading: (flag) => dispatch(setFirstLoading(flag)),
		SetCurrentLoading: (flag) => dispatch(setCurrentLoading(flag)),
	};
};

const mapStateToProps = (state) => {
	const { pokemons, loading, pokemonsOffset } = state;
	return { pokemons, loading, pokemonsOffset };
};

let offset = 0;

const Pokemons = (props) => {
	const { AddPokemons, SetFirstLoading, SetCurrentLoading, loading } = props;
	const limit = 16;

	const loadPokemons = async () => {
		if (loading.current) return;
		offset++;
		const firsLoad = offset - 1 === 0;
		if (!firsLoad) SetCurrentLoading(true);
		const Pokemons = await getPokemons({ limit, offset: (offset - 1) * limit });
		AddPokemons(Pokemons);
		if (firsLoad) SetFirstLoading(false);
		else SetCurrentLoading(false);
		return Pokemons;
	};

	return <PokemonList loadMore={async () => await loadPokemons()} {...props} offset={offset} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
