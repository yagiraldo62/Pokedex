import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
const BorderLinearProgress = withStyles({
	root: {
		height: 10,
		backgroundColor: lighten('#ff6c5c', 0.5),
	},
	bar: {
		borderRadius: 20,
		backgroundColor: '#ff6c5c',
	},
})(LinearProgress);
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	margin: {
		margin: theme.spacing(1),
	},
	w100: {
		width: '100%',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
}));
export default ({ pokemon }) => {
	const classes = useStyles();
	let Abilities = pokemon.abilities.reduce((abilities, { ability }) => {
		const { name } = ability;
		return (abilities += !abilities.length ? name : `, ${name}`);
	}, '');
	return (
		<div className="statsContainer">
			<div className={classes.w100}>
				heigth : {pokemon.height} <br />
				weight : {pokemon.weight} <br />
				Base Experience : {pokemon.base_experience} <br />
				<div className={classes.w100}>
					Habilities : <span className={classes.capitalize}>{Abilities}</span> <br />
				</div>
			</div>
			{pokemon.stats.map((stat) => {
				const value = (stat.base_stat * 100) / 160;
				return (
					<div>
						<span>{stat.stat.name}</span>
						<BorderLinearProgress
							className={classes.margin}
							variant="determinate"
							color="secondary"
							value={value}
						/>
					</div>
				);
			})}
		</div>
	);
};
