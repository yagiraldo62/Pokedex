import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PokemonCard from '../PokemonCard/';
import PokemonDetails from '../PokemonDetails/';
import Box from '@material-ui/core/Box';
import { PokemonListContainer } from './style.module.scss';
import loader from '../../../assets/img/loader.svg';
export default ({ pokemons, loadMore, offset }) => {
	const [openDetails, setOpenDetails] = useState(false);
	return (
		<Box className={PokemonListContainer}>
			<PokemonDetails Open={openDetails} setOpen={setOpenDetails} />
			<InfiniteScroll
				hasMore={offset < 50}
				pageStart={offset}
				loadMore={loadMore}
				threshold={400}
				useWindow={true}
				initialLoad={true}
				// loader={<img src={loader} />}
			>
				{pokemons.map((pokemon, i) => (
					<PokemonCard setOpen={setOpenDetails} pokemon={pokemon} i={i} key={`pokemon${pokemon.name}Card`} />
				))}
			</InfiniteScroll>
		</Box>
	);
};
