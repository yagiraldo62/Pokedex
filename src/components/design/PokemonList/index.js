import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PokemonCard from '../PokemonCard/';
import PokemonDetails from '../PokemonDetails/';
import { PokemonListContainer, LoaderContainer } from './style.module.scss';
import loader from '../../../assets/img/loader.svg';

const Loader = () => (
	<div className={LoaderContainer}>
		<img src={loader} alt="Loading..." />
	</div>
);
export default ({ pokemons, loadMore, offset }) => {
	const [openDetails, setOpenDetails] = useState(false);
	return (
		<div className={PokemonListContainer}>
			<PokemonDetails Open={openDetails} setOpen={setOpenDetails} />
			<InfiniteScroll
				hasMore={offset < 15}
				pageStart={0}
				loadMore={loadMore}
				useWindow={false}
				initialLoad={true}
				threshold={100}
				loader={<Loader />}
				useCapture={true}
			>
				{pokemons.map((pokemon, i) => (
					<PokemonCard
						setOpen={setOpenDetails}
						pokemon={pokemon}
						i={i}
						key={`pokemon${pokemon.name}Card${i}`}
					/>
				))}
			</InfiniteScroll>
		</div>
	);
};
