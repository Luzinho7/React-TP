import "./style.css"
import "./normalize.css"
import logo from './assets/PokemonLogo.png';
import CardPokemon from './Components/CardPokemon/CardPokemon.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemondata, setDataPokemon] = useState([]);
  const [loading, setLoading] = useState (false); 


  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => response.json())
      .then((pokemondata) => {
        console.log(pokemondata);
        setDataPokemon(pokemondata);
        setLoading(true);  
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
      {
        loading ? (
      <div className="lmj-layout-inner">
        <Sidebar pokedex={pokedex} />
        <main>{helloList}</main>
      </div>
        ) : (
          <p style={{textAlign: "center", width: "100%", color: "white"}}>Chargement des données...</p>
        )
      }
    </>
  );
}

export default App;
