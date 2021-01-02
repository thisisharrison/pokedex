import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';

export const receiveAllPokemon = (pokemon) => (
    {
        type: RECEIVE_ALL_POKEMON,
        pokemon
    }
)

export const receiveSinglePokemon = (payload) => (
    {
        type: RECEIVE_SINGLE_POKEMON,
        payload
    }
)

export const receivePokemonErrors = (errors) => (
    {
        type: RECEIVE_POKEMON_ERRORS,
        errors
    }
) 

// thunk action creator
export const requestAllPokemon = () => dispatch => (
    APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => dispatch => (
    APIUtil.fetchSinglePokemon(id).then(payload => dispatch(receiveSinglePokemon(payload)))
)

export const createPokemon = (pokemon) => dispatch => {
    return APIUtil.postPokemon(pokemon).then(
        (payload) => {
            dispatch(receiveSinglePokemon(payload));
            return payload.pokemon;
        },
        (errors) => {
            dispatch(receivePokemonErrors(errors.responseJSON))
        })
}