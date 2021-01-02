import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetail from './pokemon/pokemon_detail';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
)

export default Root;