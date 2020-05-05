import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { CloseBtnContainer } from './style.module.scss';
import Details from './Details';
import { BG, pokeNameColor } from './colors';
import Top from './Top';
import Bottom from './Bottom';
const mapDispatchToProps = (dispatch) => {
	return {};
};

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
	};
};

const getActivePokemon = (pokemons) => pokemons.filter((pokemon) => pokemon.active)[0];

const PokemonDetails = ({ pokemons, Open, setOpen }) => {
	const [pokemon, setPokemon] = useState(null);
	const [bg, setBg] = useState('');
	const [sprite, setSprite] = useState('');
	const [pokeNColor, setPokeNColor] = useState([]);

	const handleClose = () => {
		window.dispatchEvent(new Event('closePokemonDetail'));
		setTimeout(() => {
			setOpen(false);
			setPokemon(null);
		}, 100);
	};

	const escPressListener = (e) => {
		if (e.code === 'Escape') handleClose();
	};

	useEffect(() => {
		setPokemon(getActivePokemon(pokemons));

		if (!pokemon) return;

		window.addEventListener('keydown', escPressListener);
		const types = pokemon.types.map((type) => type.type.name);
		setBg(BG(types));
		setPokeNColor(pokeNameColor(types));
		setSprite(pokemon.sprites.front_default);
		return () => window.removeEventListener('keydown', escPressListener);
	}, [pokemons, pokemon]);

	const CloseButton = (
		<div className={CloseBtnContainer}>
			<IconButton edge="start" onClick={handleClose} aria-label="close">
				<CloseIcon />
			</IconButton>
		</div>
	);
	const topContent = <Top imageSrc={sprite} close={CloseButton} pokemon={pokemon} pokeNameColor={pokeNColor} />;
	const bottomContent = <Bottom imageSrc={sprite} close={CloseButton} pokemon={pokemon} pokeNameColor={pokeNColor} />;
	return (
		<Details
			topCont={topContent}
			bottomCont={bottomContent}
			open={Open}
			pokemon={pokemon}
			close={CloseButton}
			bg={bg}
		/>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
