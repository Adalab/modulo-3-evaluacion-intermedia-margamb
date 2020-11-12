import React from 'react';

const Pokemon = (props) => {
  console.log(props);
  return (
    <>
      <img
        src={props.pokemon.url}
        alt={props.pokemon.name}
        title={props.pokemon.name}
      />
      <h3>{props.name}</h3>
      <ul className="pokemonsTypes">
        {props.pokemon.types.map((item, index) => {
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

export default Pokemon;
