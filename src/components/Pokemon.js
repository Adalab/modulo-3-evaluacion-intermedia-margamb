import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const handleAddFavorites = () => {
    props.handleFavorite(props.id);
  };

  return (
    <div
      onClick={handleAddFavorites}
      className={props.isFavorite ? 'favorite' : ''}
    >
      <img src={props.url} alt={props.name} title={props.name} />
      <h3 className="namePokemon">{props.name}</h3>
      <ul className="pokemonsTypes">
        {props.types.map((item, index) => {
          return (
            <li className="pokemonTypes" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Pokemon.propsTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
