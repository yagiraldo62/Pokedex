import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
const RedLinearProgress = withStyles({
	root: {
		height: 12,
		backgroundColor: lighten('#E53935', 0.5),
		borderRadius: '2px',
	},
	bar: {
		backgroundColor: lighten('#E53935', 0.1),
	},
})(LinearProgress);

const OrangeLinearProgress = withStyles({
	root: {
		height: 12,
		backgroundColor: lighten('#FF7043', 0.5),
		borderRadius: '2px',
	},
	bar: {
		backgroundColor: lighten('#FF7043', 0.1),
	},
})(LinearProgress);

const GreenLinearProgress = withStyles({
	root: {
		height: 12,
		backgroundColor: lighten('#4CAF50', 0.5),
		borderRadius: '2px',
	},
	bar: {
		backgroundColor: lighten('#4CAF50', 0.1),
	},
})(LinearProgress);
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	margin: {
		margin: theme.spacing(1),
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

	pokemon.stats = pokemon.stats.map((stat) => {
		const value = (stat.base_stat * 100) / 160;
		let puntuation = '';
		if (value <= 40) puntuation = 1;
		else if (value <= 60) puntuation = 2;
		else puntuation = 3;

		stat.puntuation = puntuation;
		return stat;
	});

	return (
		<div className="statsContainer">
			<div className="mr">
				<div className="statsAbilities">
					<span className="statTitle">Abilities </span> <br />
					<span className={classes.capitalize}>{Abilities}</span>
				</div>
				<div className={`PokemonProfileInfo `}>
					<h2 className="my-0 mb-n">{pokemon.base_experience}</h2>
					<span className="statTitle">Base Exp </span>
				</div>
				<div className={`PokemonProfileInfo `}>
					<h2 className="my-0 mb-n">{pokemon.height}</h2>
					<span className="statTitle">Heigth </span>
				</div>
				<div className={`PokemonProfileInfo `}>
					<h2 className="my-0 mb-n">{pokemon.weight}</h2>
					<span className="statTitle">Weight </span>
				</div>
			</div>
			<div className="pokemonStats">
				<h2>Stats</h2>
				{pokemon.stats.map((stat) => {
					let value = (stat.base_stat * 100) / 140;
					if (value > 100) value = 100;
					let Progress = null;
					if (stat.puntuation === 1) Progress = RedLinearProgress;
					if (stat.puntuation === 2) Progress = OrangeLinearProgress;
					if (stat.puntuation === 3) Progress = GreenLinearProgress;
					return (
						<div>
							<div>
								<span className="statTitle">{stat.stat.name}</span>
								<Progress
									bg={stat.color}
									className={classes.margin}
									variant="determinate"
									value={value}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
