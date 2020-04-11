import React, { createRef, useEffect } from 'react';
import { bottomContainer, activeBottom } from './style.module.scss';
import Details from './Details/';
export default ({ pokemon }) => {
	const bottom = createRef();
	useEffect(() => {
		const inactiveBottomCont = () => {
			if (bottom.current) bottom.current.classList.remove(activeBottom);
		};
		if (bottom.current) bottom.current.classList.add(activeBottom);
		window.addEventListener('closePokemonDetail', () => inactiveBottomCont());
	}, []);

	return (
		<div ref={bottom} className={bottomContainer}>
			<h1>{pokemon.name}</h1>
			<Details pokemon={pokemon} />
		</div>
	);
};
