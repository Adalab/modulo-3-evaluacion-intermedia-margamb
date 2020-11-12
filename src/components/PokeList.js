import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  return (
    <ul className="pokemosUl">
      {props.pokemons.map((pokemon) => {
        return (
          <li className="pokemonList" key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokeList;
