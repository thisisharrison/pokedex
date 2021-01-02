import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, action.pokemon, oldState);
        case RECEIVE_SINGLE_POKEMON:
            // return Object.assign({}, action.payload.pokemon, oldState);
            nextState[action.payload.pokemon.id] = action.payload.pokemon;
            return nextState;
        default:
            return oldState;
    }
}

export default pokemonReducer;