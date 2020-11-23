import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

const PokeList = (props) => {
  const [favorites, setFavorites] = useState([]); //manejar estados q son arrays

  const handleFavorite = (clickFavId) => {
    console.log('handleFavorite', clickFavId);
    clickFavId = parseInt(clickFavId);
    const favIndex = favorites.findIndex(
      (pokemonId) => pokemonId === clickFavId
    );
    if (favIndex === -1) {
      favorites.push(clickFavId);
    } else {
      favorites.splice(favIndex, 1);
    }
    setFavorites([...favorites]);
    console.log('Favorites set to ', favorites);
  };

  const isFavorite = (id) => {
    console.log('isFavorite', id);
    return favorites.includes(id);
  };

  return (
    <ul className="pokemosUl">
      {props.pokemons.map((pokemon) => {
        return (
          <li className="pokemonList" key={pokemon.id}>
            {/* <Pokemon pokemon={pokemon} /> */}
            <Pokemon
              isFavorite={isFavorite(pokemon.id)}
              handleFavorite={handleFavorite}
              {...pokemon}
            />
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
