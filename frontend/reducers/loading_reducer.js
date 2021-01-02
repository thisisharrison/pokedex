import { 
    RECEIVE_ALL_POKEMON, 
    RECEIVE_SINGLE_POKEMON, 
    RECEIVE_POKEMON_ERRORS,
    START_LOADING_ALL_POKEMON, 
    START_LOADING_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
    indexLoading: false,
    detailLoading: false
}

const loadingReducer = (oldState = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, oldState, { indexLoading: false });
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, oldState, { detailLoading: false });
        case RECEIVE_POKEMON_ERRORS:
            return Object.assign({}, oldState, { detailLoading: false , indexLoading: false });
        case START_LOADING_ALL_POKEMON:
            return Object.assign({}, oldState, { indexLoading: true });
        case START_LOADING_SINGLE_POKEMON:
            return Object.assign({}, oldState, { detailLoading: true });
        default: 
            return oldState;
    }
}

export default loadingReducer;