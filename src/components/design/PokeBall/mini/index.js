import React from 'react';
import styled from 'styled-components';
import styles from './style.module.scss';

const PokeBallContainer = styled.div`
	animation: ${p => (p.loading === true ? `1s ${styles['spinning']} infinite` : 'none')};
`;

export default ({ loading = 'false', style = '' }) => {
	return (
		<PokeBallContainer loading={loading} className={`${styles['pokeball-container']} ${style}`}>
			<div className={styles.pokeball}>
				<div className={styles['pokeball-details']}></div>
			</div>
		</PokeBallContainer>
	);
};
