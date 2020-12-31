import { combineReducer } from 'redux';
import pokemonReducer from './pokemon_reducer';

export default entitiesReducer = combineReducer(
    {
        pokemon: pokemonReducer
    }
);