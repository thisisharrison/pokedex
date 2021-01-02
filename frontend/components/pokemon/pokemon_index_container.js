import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

// pass pokemon prop to PokemonIndex
const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state), 
    loading: state.ui.loading.indexLoading
})

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);

