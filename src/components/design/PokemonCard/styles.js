import { motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import color from 'color';
import NatureColors from '../colors';

const StyledPokemonCardCont = styled.div`
	width: 100%;
	height: 100%;
	margin-bottom: 5px;
	color: white !important;
	cursor: pointer;
	border-radius: 25px !important;

	&:hover {
		box-shadow: 1px 1px 14px rgba(${color('#000').rgb()}, 0.3);
		transform: scale(1.15);
		z-index: 4;
		.PokemonImgContainer {
			.decoration {
				transform: scale(1.5) skew(-20deg) translateY(-5px);
			}
		}

		.pokemonCardContent {
			h2 {
				font-weight: bolder;
			}
		}
	}

	.pokemonCardContent {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 10px 0 0 0;

		h2 {
			display: inline-block;
			width: 100%;
			font-size: 22px;
			transform: translateX(-15px);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			@include media(phone) {
				font-size: 17px;
			}
		}
	}
`;

export const StyledPokemonCard = (props) => {
	const { type, children } = props;
	const bgRef = useRef();
	useEffect(() => {
		bgRef.current.style.background = BG(type);
	}, [type]);
	return (
		<motion.div {...props}>
			<StyledPokemonCardCont ref={bgRef} type={type}>
				{children}
			</StyledPokemonCardCont>
		</motion.div>
	);
};

const bgColors = (type) => [color(NatureColors[type]).lighten(0.2).hex(), color(NatureColors[type]).darken(0.2).hex()];
const BG = (type) => {
	const [light, dark] = bgColors(type);
	return `linear-gradient(-165deg,${light},${dark})`;
};
