import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, action.pokemon, oldState);
        case RECEIVE_POKEMON:
            return Object.assign({}, action.pokemon, oldState);
        default:
            return oldState;
    }
}

export default pokemonReducer;