import React from 'react';
import Details from './Details/';

import { bottomContainer } from './style.module.scss';

export default ({ pokemon, imageSrc, close, pokeNameColor }) => {
	return (
		<>
			{pokemon && (
				<div className={bottomContainer}>
					<img src={imageSrc} />
					<Details pokemon={pokemon} />
				</div>
			)}
		</>
	);
};
