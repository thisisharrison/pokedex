import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// test
import { receiveAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';


document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<h1>YOOOOOOOOO</h1>, rootEl);

    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});

// Test
// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon)); /* function to create action object */
// fetchAllPokemon().then(getSuccess); /* passed response, all pokemon to getSuccess function */