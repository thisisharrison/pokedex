import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, action.payload.items)
        default:
            return oldState;
    }
}

export default itemsReducer;