// import PokeBall from '../../design/PokeBall/mini/';
import React from 'react';
import { pokeball, headerContainer, pokeHeader } from './styles.module.scss';
import Box from '@material-ui/core/Box';
import Pokeball from '../../../assets/img//pokeball.svg';
export default () => (
	<Box className={pokeHeader}>
		<Box className={headerContainer}>
			<h1>Pokedex</h1>
			<img src={Pokeball} />
		</Box>
	</Box>
);
