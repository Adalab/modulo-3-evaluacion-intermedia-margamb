import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  return (
    <>
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
    </>
  );
};

Pokemon.propsTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
