import React, { useState } from 'react';
import apiPoke from '../components/data/apiPoke.json';
import Pokelist from './PokeList';
import Header from './Header';
import './App.scss';

const App = () => {
  const [pokemons] = useState(apiPoke);

  return (
    <div className="App">
      <Header />
      <Pokelist pokemons={pokemons} />
    </div>
  );
};

export default App;
