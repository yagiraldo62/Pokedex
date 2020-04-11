import React, { useEffect } from 'react';
import { setPokemonSpecieData } from '../../../../app/redux/actions';
import { getPokemonSpecie } from '../../../../app/services/pokemonService';
import { connect } from 'react-redux';

import Details from './Details';

const mapDispatchToProps = (dispatch) => {
	return {
		SetPokemonSpecieData: ({ data, name }) => dispatch(setPokemonSpecieData({ data, name })),
	};
};

const mapStateToProps = (state) => {
	const { pokemons, loading, pokemonsOffset } = state;
	return { pokemons, loading, pokemonsOffset };
};

const DetailsWrapper = (props) => {
	const { pokemon, SetPokemonSpecieData } = props;

	useEffect(() => {
		(async () => {
			if (!pokemon.base_happiness) {
				const { name } = pokemon;
				const data = await getPokemonSpecie(pokemon.name);
				SetPokemonSpecieData({ data, name });
			}
		})();
	}, []);
	return <Details {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsWrapper);
