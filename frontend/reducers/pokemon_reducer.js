import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export default pokemonReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon;
        default:
            return oldState;
    }
}