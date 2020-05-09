import React, { useState, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PokemonCard from '../PokemonCard/';
import PokemonDetails from '../PokemonDetails/';
import { PokemonListContainer, LoaderContainer } from './style.module.scss';
import loader from '../../../assets/img/loader.svg';
import Search from '../Search';

const Loader = () => (
	<div className={LoaderContainer}>
		<img src={loader} alt="Loading..." />
	</div>
);
export default ({ pokemons, loadMore, offset }) => {
	const [filterData,setFilterData] = useState([]);
	const [pokemonSearch,setPokemonSearch] = useState('');
	const [openDetails, setOpenDetails] = useState(false);

	useMemo(()=> {
		const results = pokemons.filter(pokemon => {
			return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase())
		});
		setFilterData(results);
	},[pokemons,pokemonSearch])


	return (
		<div className={PokemonListContainer}>
			<Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch} />
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
				{filterData.map((pokemon, i) => (
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
