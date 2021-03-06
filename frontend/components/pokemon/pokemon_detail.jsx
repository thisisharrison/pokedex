import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import Item from '../items/item';
import LoadingIcon from './loading_icon';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }
    render () {
        if (this.props.loading) { return <LoadingIcon /> }
        const {items, moves} = this.props;
        // if (!this.props.pokemon) debugger
        const {name, pokeType, attack, defense, imageUrl} = this.props.pokemon;
        const moveList = moves.join(', ')
        const itemList = items.map((item) => <Item key={item.name} item={item}/>)
        return (
            <section className="pokemon-detail">
                <figure>
                    <img src={imageUrl} alt={name}/>
                </figure>
                <ul>
                    <li><h2>{name}</h2></li>
                    <li>Type: {pokeType}</li>
                    <li>Attack: {attack}</li>
                    <li>Defense: {defense}</li>
                    <li>Moves: {moveList}</li>
                </ul>
                <section className="toys">
                    <h3>Items</h3>
                    <ul className="toy-list">
                        {itemList}
                    </ul>
                </section>
                <Route path="/pokemon/:pokemonId/item/:itemId"
                    component={ItemDetailContainer}/>
            </section>
        )
    }
}

export default PokemonDetail;