import React from 'react';
import Details from './Details/';

import { bottomContainer } from './style.module.scss';

export default ({ pokemon, imageSrc }) => {
	return (
		<>
			{pokemon && (
				<div className={bottomContainer}>
					<img src={imageSrc} alt="Pokemon Detail Sprite" />
					<Details pokemon={pokemon} />
				</div>
			)}
		</>
	);
};
