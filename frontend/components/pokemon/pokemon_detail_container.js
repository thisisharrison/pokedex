import { connect } from "react-redux"
import PokemonDetail from "./pokemon_detail"
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectPokemonMovesNames } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: Object.values(state.entities.items),
    moves: selectPokemonMovesNames(state)
})

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);