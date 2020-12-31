import { combineReducer } from 'redux';
import entitiesReducer from './entities_reducer';

export default rootReducer = combineReducer(
    {
        entities: entitiesReducer
    }
);

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