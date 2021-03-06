import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const movesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, action.payload.moves)
        default:
            return oldState;
    }
}

export default movesReducer;