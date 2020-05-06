import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Image from './children/Image';
import Info from './children/Info';
import { setActivePokemon } from '../../../app/redux/actions';
import { connect } from 'react-redux';
import { StyledPokemonCard } from './styles';
import { pokemonCardVariants } from './motions/variants';

import { pokemonCardContainer, pokemonCard, pokemonCardContent } from './style.module.scss';

const mapDispatchToProps = (dispatch) => {
	return {
		SetActivePokemon: (i) => {
			dispatch(setActivePokemon(i));
		},
	};
};

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
	};
};

const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonCard = ({ pokemon, i, SetActivePokemon, pokemons, setOpen }) => {
	const setActivePk = (i) => {
		SetActivePokemon(i);
		setOpen(true);
	};
	const firstType = pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name;
	const altType = `alt${capitalize(pokemon.types[0].type.name)}`;
	return (
		<div className={pokemonCardContainer} onClick={() => setActivePk(i)}>
			<StyledPokemonCard
				variants={pokemonCardVariants}
				className={`${pokemonCard} `}
				whileHover="hover"
				type={firstType}
			>
				<CardContent className={pokemonCardContent}>
					<Info capitalize={capitalize} name={pokemon.name} types={pokemon.types} />
					<Image src={pokemon.sprites.front_default} altType={altType} />
				</CardContent>
			</StyledPokemonCard>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
