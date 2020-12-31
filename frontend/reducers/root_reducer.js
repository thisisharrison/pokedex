import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer
});

export default rootReducer;

// Reducer
// rootReducer
//     entititiesReducer
//         pokemonReducer

// State
// {
//     entities: {
//         pokemon: {
//             // ... more pokemon
//         },
//         moves: {
//         },
//         items: {
//         }
//     },
//     ui: {
//         errors: [],
//             loading: { },
//     }
// }