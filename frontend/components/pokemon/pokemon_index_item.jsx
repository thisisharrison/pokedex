import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (    
    <li className="pokemon-index-item">
        <Link to={`/pokemon/${poke.id}`} >
            <span>
                <img src={poke.imageUrl} />
            </span>
            {poke.name}
        </Link>
    </li>
)

export default PokemonIndexItem;