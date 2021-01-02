import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// test
import { receiveAllPokemon, receiveSinglePokemon, requestAllPokemon, requestSinglePokemon, createPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors'
import * as APIUtil from './util/api_util';


document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, rootEl);

    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.requestSinglePokemon = requestSinglePokemon
    window.receiveSinglePokemon = receiveSinglePokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
    window.createPokemon = createPokemon;
    window.postPokemon = APIUtil.postPokemon;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.data = { name: 'garfield', attack: 1, defense: 1, poke_type: 'fire', image_url: 'https://pbs.twimg.com/profile_images/1242488527285190657/O6d8H8YA_400x400.jpg', move_1: 'sleep', move_2: 'eat' }
    
})

// Test
// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon)); // function to create action object
// fetchAllPokemon().then(getSuccess); // passed response, all pokemon to getSuccess function
// # Testing
// # 
// # params = {: pokemon=> {: name => 'garfield', : attack => 1, : defense => 1, : poke_type => 'fire', : image_url => 'https://pbs.twimg.com/profile_images/1242488527285190657/O6d8H8YA_400x400.jpg', : move_1 => 'sleep', : move_2 => 'eat' }}