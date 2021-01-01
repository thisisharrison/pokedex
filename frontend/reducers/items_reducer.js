import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_POKEMON:
            return Object.assign({}, oldState, action.payload.items)
        default:
            return oldState;
    }
}

export default itemsReducer;