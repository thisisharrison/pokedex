import React from 'react';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
import PokemonIndexItem from './pokemon_index_item';
import LoadingIcon from './loading_icon';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        if (this.props.loading) { return <LoadingIcon /> }
        const list = this.props.pokemon.map((pokemon) => <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>)
        return (
            <section className="pokedex">
                <Route exact path="/" component={PokemonFormContainer} />
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                <ul>
                    {list}
                </ul>
            </section>
        )
    }
}
export default PokemonIndex;