import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const movesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_POKEMON:
            return Object.assign({}, oldState, action.payload.moves)
        default:
            return oldState;
    }
}

export default movesReducer;