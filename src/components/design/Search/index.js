import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import { SearchCont } from './styles';



export default ({pokemonSearch,setPokemonSearch}) => {

	return (
		<SearchCont>
			<TextField
				id="input-with-icon-grid"
				label="Search Pokemons"
				placeholder="Pokemon name..."
				onChange={({target}) => setPokemonSearch(target.value)}
				value={pokemonSearch}
				InputProps={{
					startAdornment: (
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					),
				}}
			/>
		</SearchCont>
	);
}
