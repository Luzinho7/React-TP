import "./style.css"
import "./normalize.css"
import pokemondata from './data/data.json';
import logo from './assets/PokemonLogo.png';
import CardPokemon from './Components/CardPokemon/CardPokemon.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    console.log(`Le Pokédex possède ${pokedex.length} Pokémons`);
  }, [pokedex]);
  const helloList = pokemondata.map((poke, index) => (
    <CardPokemon pokemondata={poke} key={index} pokedex={pokedex} setPokedex={setPokedex} />
  ));

  return (
    <>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <div className="lmj-layout-inner">
        <Sidebar pokedex={pokedex} />
        <main>{helloList}</main>
      </div>
    </>
  );
}
export default App;
