import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions';
const errorsReducer = (oldState = [], action) => {
    switch(action.type) {
        case RECEIVE_POKEMON_ERRORS:
            return [...oldState, action.errors]
        default: 
            return oldState;
    }
}

export default errorsReducer;