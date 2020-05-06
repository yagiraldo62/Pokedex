import React from 'react';
import Stats from './Stats';
import './style.scss';

export default ({ pokemon }) => {
	return (
		<div>
			{pokemon && (
				<div>
					<Stats pokemon={pokemon} />
				</div>
			)}
		</div>
	);
};
