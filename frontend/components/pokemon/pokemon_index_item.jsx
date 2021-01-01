import React from 'react';

const PokemonIndexItem = ({ poke }) => (
    <li><span><img src={poke.imageUrl} /></span> {poke.name}</li>
)

export default PokemonIndexItem;