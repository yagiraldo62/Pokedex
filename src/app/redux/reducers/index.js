import { combineReducers } from 'redux';
import pokemons from './pokemons';
import pokemonsOffset from './pokemonsOffset';
import loading from './loading';

export default combineReducers({
	pokemons,
	pokemonsOffset,
	loading,
});
