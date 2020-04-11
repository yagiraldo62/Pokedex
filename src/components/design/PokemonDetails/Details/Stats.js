import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
const BorderLinearProgress = withStyles({
	root: {
		height: 12,
		backgroundColor: lighten('#2962ff', 0.5),
		borderRadius: '2px',
	},
	bar: {
		backgroundColor: lighten('#2962ff', 0.1),
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
	return (
		<div className="statsContainer">
			<div className="mr">
				<div className="statsAbilities text-center">
					<span className="statTitle">Abilities </span> <br />
					<span className={classes.capitalize}>{Abilities}</span>
				</div>
				<div className={`PokemonProfileInfo text-end`}>
					<h2 className="my-0 mb-n">{pokemon.base_experience}</h2>
					<span className="statTitle">Base Exp </span>
				</div>
				<div className={`PokemonProfileInfo text-end`}>
					<h2 className="my-0 mb-n">{pokemon.height}</h2>
					<span className="statTitle">Heigth </span>
				</div>
				<div className={`PokemonProfileInfo text-end`}>
					<h2 className="my-0 mb-n">{pokemon.weight}</h2>
					<span className="statTitle">Weight </span>
				</div>
			</div>
			<div className="pokemonStats">
				{pokemon.stats.map((stat) => {
					const value = (stat.base_stat * 100) / 160;
					return (
						<div>
							<div>
								<span className="statTitle">{stat.stat.name}</span>
								<BorderLinearProgress
									className={classes.margin}
									variant="determinate"
									color="secondary"
									value={value}
								/>
							</div>
							<span>{parseInt(value)}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
