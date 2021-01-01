import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const list = this.props.pokemon.map((poke) => <li key={poke.id}>{poke.name}</li>)
        return (
            <ul>
                <h1>Inside Pokemon Index Container and Pokemon Index</h1>
                {list}
            </ul>
        )
    }
}
export default PokemonIndex;