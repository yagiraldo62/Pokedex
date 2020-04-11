import { motion, useAnimation } from 'framer-motion';
import React, { createRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import color from 'color';
import { topContainer, activeTop, topContent, pockemonOrderContainer } from './style.module.scss';
import Chip from '@material-ui/core/Chip';
import colors from '../colors';
import {
	pockemonCardChip,
	pockemonCardChipContainer,
	grassChip,
	poisonChip,
	fireChip,
	flyingChip,
	waterChip,
	bugChip,
	normalChip,
	groundChip,
	electricChip,
	fairyChip,
	ghostChip,
	darkChip,
	fightingChip,
	psychicChip,
	rockChip,
	steelChip,
	iceChip,
	dragonChip,
} from '../PokemonCard/style.module.scss';
export default ({ pokemon, close }) => {
	const top = createRef();
	const classes = {
		grassChip,
		poisonChip,
		fireChip,
		flyingChip,
		waterChip,
		bugChip,
		normalChip,
		groundChip,
		electricChip,
		fairyChip,
		ghostChip,
		darkChip,
		fightingChip,
		psychicChip,
		rockChip,
		steelChip,
		iceChip,
		dragonChip,
	};

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const types = [
		pokemon.types[0].type.name,
		pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name,
	];
	const activeTopCont = () => {
		if (!top.current) return;
		top.current.classList.add(activeTop);
		const lighteness = 0.2;
		const color1 = types[0] === types[1] ? colors[types[0]] : color(colors[types[0]]).lighten(lighteness);
		const color2 =
			types[0] === types[1]
				? color(colors[types[0]]).lighten(lighteness)
				: color(colors[types[1]]).lighten(lighteness);

		top.current.style.background =
			types[0] === types[1]
				? `linear-gradient(45deg, ${color1},${color1},${color2}, ${color(color2).lighten(lighteness)})`
				: `linear-gradient(90deg,${color1} 0%  50%,${color2} 40% 100%)`;
	};

	const inactiveTopCont = () => {
		if (top.current) top.current.classList.remove(activeTop);
	};

	useEffect(() => {
		top.current.parentNode.parentNode.style.background = 'transparent';
		top.current.parentNode.parentNode.style.position = 'relative';
		activeTopCont();
		console.log(pokemon);
		window.addEventListener('closePokemonDetail', () => inactiveTopCont());
	}, []);

	return (
		<>
			<div ref={top} className={topContainer}>
				<div className={topContent}>
					{close}
					<Typography
						variant="body2"
						color="textSecondary"
						component="span"
						className={pockemonCardChipContainer}
					>
						{pokemon.types.map((type, i) => (
							<Chip
								key={type.type.name + i}
								variant="outlined"
								label={capitalize(type.type.name)}
								className={`${pockemonCardChip} ${classes[type.type.name + 'Chip']}`}
							/>
						))}
					</Typography>
					<div className={pockemonOrderContainer}>#{pokemon.order}</div>
					<img src={pokemon.sprites.front_default}></img>
				</div>
			</div>
		</>
	);
};
