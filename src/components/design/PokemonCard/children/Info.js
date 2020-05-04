import React from 'react';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import elements from '../../elements';
import styled from 'styled-components';

const ElementsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start !important;
	padding-left: 1em;
	padding-top: 0.4em;

	img {
		width: 2.5em;
		margin-right: 0.5em;
		border-radius: 100%;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
	}
`;

const InfoContainer = ({ children }) => <motion.div>{children}</motion.div>;
export default ({ name, types, capitalize }) => (
	<InfoContainer>
		<Typography variant="h5" component="h2">
			{capitalize(name)}
		</Typography>
		<ElementsContainer>
			{types.map((type, i) => (
				<img key={i} src={elements[type.type.name]} alt={type.type.name} title={type.type.name} />
			))}
		</ElementsContainer>
	</InfoContainer>
);
