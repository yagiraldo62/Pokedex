import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PokemonCard from '../PokemonCard/';
import PokemonDetails from '../PokemonDetails/';
import Box from '@material-ui/core/Box';
import { PokemonListContainer } from './style.module.scss';
export default ({ pokemons, loadMore, offset }) => {
	const [openDetails, setOpenDetails] = useState(false);
	return (
		<Box className={PokemonListContainer}>
			<PokemonDetails Open={openDetails} setOpen={setOpenDetails} />
			<InfiniteScroll
				hasMore={offset < 50}
				pageStart={offset}
				loadMore={loadMore}
				threshold={1500}
				useWindow={true}
				initialLoad={true}
			>
				{pokemons.map((pokemon, i) => (
					<PokemonCard setOpen={setOpenDetails} pokemon={pokemon} i={i} key={i} />
				))}
			</InfiniteScroll>
		</Box>
	);
};
