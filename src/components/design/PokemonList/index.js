import React, { useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PokemonCard from '../PokemonCard/';
import PokemonDetails from '../PokemonDetails/';
import Box from '@material-ui/core/Box';
import { PokemonListContainer, LoaderContainer } from './style.module.scss';
import loader from '../../../assets/img/loader.svg';

const Loader = () => (
	<div className={LoaderContainer}>
		<img src={loader} alt="Loading..." />
	</div>
);
export default ({ pokemons, loadMore, offset }) => {
	const [openDetails, setOpenDetails] = useState(false);
	const listC = useRef();
	return (
		<div className={PokemonListContainer} ref={listC}>
			<PokemonDetails Open={openDetails} setOpen={setOpenDetails} />
			<InfiniteScroll
				hasMore={offset < 15}
				pageStart={0}
				loadMore={loadMore}
				useWindow={false}
				initialLoad={true}
				threshold={100}
				height={1200}
				loader={<Loader />}
				useCapture={true}
			>
				{pokemons.map((pokemon, i) => (
					<PokemonCard setOpen={setOpenDetails} pokemon={pokemon} i={i} key={`pokemon${pokemon.name}Card`} />
				))}
			</InfiniteScroll>
		</div>
	);
};
