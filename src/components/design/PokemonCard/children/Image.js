import React from 'react';
import { motion } from 'framer-motion';
import {
	PokemonImgContainer,
	decoration,
	altGrass,
	altPoison,
	altFire,
	altWater,
	altBug,
	altNormal,
	altGround,
	altElectric,
	altFairy,
	altFighting,
	altPsychic,
	altSteel,
	altRock,
	altIce,
	altGhost,
	altDark,
	altDragon,
} from '../style.module.scss';
const classes = {
	altGrass,
	altPoison,
	altFire,
	altWater,
	altBug,
	altNormal,
	altGround,
	altElectric,
	altFairy,
	altFighting,
	altPsychic,
	altSteel,
	altRock,
	altIce,
	altGhost,
	altDark,
	altDragon,
};
const ImageContainer = ({ children }) => <motion.div className={PokemonImgContainer}>{children}</motion.div>;
export default ({ src, altType }) => (
	<ImageContainer>
		<div className={`${decoration} ${classes[altType]}`}></div>
		<img src={src} />
	</ImageContainer>
);
