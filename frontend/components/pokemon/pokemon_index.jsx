import React from 'react';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const list = this.props.pokemon.map((pokemon) => <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>)
        return (
            <section className="pokedex">
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                <ul>
                    <h1>Inside Pokemon Index Container and Pokemon Index</h1>
                    {list}
                </ul>
            </section>
        )
    }
}
export default PokemonIndex;