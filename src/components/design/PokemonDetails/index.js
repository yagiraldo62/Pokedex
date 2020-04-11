import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { motion } from 'framer-motion';
import Top from './Top';
import Bottom from './Bottom';
import { CloseBtnContainer } from './style.module.scss';
const mapDispatchToProps = (dispatch) => {
	return {};
};

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
	};
};

const getActivePokemon = (pokemons) => pokemons.filter((pokemon) => pokemon.active)[0];

const PokemonDetailsRoot = ({ children }) => <motion.div>{children}</motion.div>;

const PokemonDetails = ({ pokemons, Open, setOpen }) => {
	const [pokemon, setPokemon] = React.useState({});

	const handleClose = () => {
		window.dispatchEvent(new Event('closePokemonDetail'));
		setTimeout(() => {
			setOpen(false);
		}, 100);
	};

	useEffect(() => {
		setPokemon(getActivePokemon(pokemons));
	}, [pokemons]);

	const CloseButton = (
		<div className={CloseBtnContainer}>
			<IconButton edge="start" color="white" onClick={handleClose} aria-label="close">
				<CloseIcon />
			</IconButton>
		</div>
	);
	return (
		<Dialog fullScreen open={Open} onClose={handleClose}>
			<PokemonDetailsRoot>
				<Top pokemon={pokemon} close={CloseButton} />
				<Bottom pokemon={pokemon} />
			</PokemonDetailsRoot>
		</Dialog>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
