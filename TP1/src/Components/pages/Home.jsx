import { useEffect, useState } from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import Sidebar from "../Sidebar/Sidebar";
import Spinner from "../Spinner/spinner";
import logo from "../../assets/PokemonLogo.png";

function Home() {
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
          <>
            <Spinner />
            <p style={{textAlign: "center", width: "100%", color: "white"}}>Chargement des données...</p>
          </>
        )
      }
    </>
  );
}

export default Home;