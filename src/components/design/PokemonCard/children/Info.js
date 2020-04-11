import React from 'react';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import Chip from '@material-ui/core/Chip';
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
} from '../style.module.scss';

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

const InfoContainer = ({ children }) => <motion.div>{children}</motion.div>;
export default ({ name, types, capitalize }) => (
	<InfoContainer>
		<Typography variant="h5" component="h2">
			{capitalize(name)}
		</Typography>
		<Typography variant="body2" color="textSecondary" component="span" className={pockemonCardChipContainer}>
			{types.map((type, i) => (
				<Chip
					size="small"
					key={type.type.name + i}
					variant="outlined"
					label={capitalize(type.type.name)}
					className={`${pockemonCardChip} ${classes[type.type.name + 'Chip']}`}
				/>
			))}
		</Typography>
	</InfoContainer>
);
