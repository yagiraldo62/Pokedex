import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from './children/Image';
import Info from './children/Info';
import { setActivePokemon } from '../../../app/redux/actions';
import { connect } from 'react-redux';

import {
	pokemonCardContainer,
	pokemonCard,
	pokemonCardContent,
	grass,
	poison,
	fire,
	flying,
	water,
	bug,
	normal,
	electric,
	ground,
	fairy,
	fighting,
	psychic,
	steel,
	rock,
	altIce,
	ice,
	ghost,
	dragon,
	dark,
} from './style.module.scss';
import { motion, useAnimation } from 'framer-motion';

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

const classes = {
	grass,
	poison,
	fire,
	flying,
	water,
	bug,
	normal,
	electric,
	ground,
	fairy,
	steel,
	rock,
	altIce,
	ice,
	ghost,
	fighting,
	psychic,
	dragon,
	dark,
};

const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonCardContainer = ({ children, onClick }) => {
	return (
		<motion.div className={pokemonCardContainer} onClick={onClick}>
			{children}
		</motion.div>
	);
};
const PokemonCard = ({ pokemon, i, SetActivePokemon, pokemons, setOpen }) => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		if (pokemon.active) setActive(true);
		else setActive(false);
	}, [pokemons]);
	const setActivePk = (i) => {
		SetActivePokemon(i);
		setOpen(true);
	};
	const fistType = pokemon.types[0].type.name;
	const altType = `alt${capitalize(pokemon.types[1] ? pokemon.types[1].type.name : fistType)}`;
	return (
		<PokemonCardContainer onClick={() => setActivePk(i)} active={active}>
			<Card className={`${pokemonCard} ${classes[fistType]}`}>
				<CardContent className={pokemonCardContent}>
					<Info capitalize={capitalize} name={pokemon.name} types={pokemon.types} />
					{/* front_shiny */}
					<Image src={pokemon.sprites.front_default} altType={altType} />
				</CardContent>
			</Card>
		</PokemonCardContainer>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
