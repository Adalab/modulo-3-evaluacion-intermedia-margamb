import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  return (
    <ul>
      {props.pokemons.map((pokemon) => {
        return (
          <li key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokeList;
