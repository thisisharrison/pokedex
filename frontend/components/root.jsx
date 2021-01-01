import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <h1>Inside Root</h1>
        <PokemonIndexContainer />
    </Provider>
)

export default Root;