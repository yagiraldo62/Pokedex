import React, { useState, useEffect } from 'react';
import elements from '../elements';

import { topContainer, textContainer, closeContainer, text } from './style.module.scss';

export default ({ pokemon, close, pokeNameColor }) => {
	const [types, setTypes] = useState([]);
	const [col, sh] = pokeNameColor;
	useEffect(() => {
		if (!pokemon) return;
		const types = pokemon.types.map((type) => type.type.name);
		setTypes(types);
	}, [pokemon]);
	return (
		<>
			{pokemon && (
				<div className={topContainer}>
					<section className={textContainer}>
						<div className={closeContainer}>{close}</div>
						<div className={text}>
							<h3>#{pokemon.order}</h3>
							<span style={{ color: col, textShadow: `1px 1px 2px ${sh}` }}>{pokemon.name}</span>
							<div>
								{types.map((type, i) => (
									<img key={i} src={elements[type]} alt={type} title={type} />
								))}
							</div>
						</div>
					</section>
				</div>
			)}
		</>
	);
};
