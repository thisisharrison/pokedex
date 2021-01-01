import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// test
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors'
import * as APIUtil from './util/api_util';


document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, rootEl);

    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.requestSinglePokemon = requestSinglePokemon
    window.selectAllPokemon = selectAllPokemon;
    window.fetchAllPokemon = APIUtil.fetchAllPokemon;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    const myPoke = () => setTimeout(() => {
        window.poke = selectAllPokemon(getState())[0];
        console.log("Poke ready, ", poke);
    },3000)
    myPoke();
})

// Test
// const getSuccess = pokemon => console.log(receiveAllPokemon(pokemon)); // function to create action object
// fetchAllPokemon().then(getSuccess); // passed response, all pokemon to getSuccess function