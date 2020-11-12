import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

const PokeList = (props) => {
  return (
    <ul className="pokemosUl">
      {props.pokemons.map((pokemon) => {
        return (
          <li className="pokemonList" key={pokemon.id}>
            {/* <Pokemon pokemon={pokemon} /> */}
            <Pokemon {...pokemon} />
          </li>
        );
      })}
    </ul>
  );
};

PokeList.propsTypes = {
  pokemons: PropTypes.array,
};

export default PokeList;
