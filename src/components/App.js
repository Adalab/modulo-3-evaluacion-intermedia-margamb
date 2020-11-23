import React, { useState } from 'react';
import apiPoke from '../components/data/apiPoke.json';
import Pokelist from './PokeList';
import Header from './Header';
import Search from './Search';
import './App.scss';

const App = (props) => {
  const [allPokemons] = useState(apiPoke); //array

  const [searchTerm, setSearchTerm] = useState(''); //'bulbasur',string

  const handleFiltered = (searchTerm) => {
    setSearchTerm(searchTerm.toUpperCase());
  };

  const pokemonsToDisplay = allPokemons.filter((pokemon) =>
    pokemon.name.toUpperCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <Header />
      <Search handleFiltered={handleFiltered} />
      <Pokelist pokemons={pokemonsToDisplay} />
    </div>
  );
};

export default App;
