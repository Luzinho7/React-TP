import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CardPokemon } from "../CardPokemon/CardPokemon.jsx";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch(err => console.error(err));
  }, [id]);


  if (!pokemon) return <div style={{color: 'white', textAlign: 'center'}}>Chargement...</div>;

  return (
    <div className="detail-container" style={{ textAlign: "center", padding: "50px" }}>
      <div style={{ marginBottom: "30px" }}>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardPokemon pokemondata={pokemon} pokedex={[]} setPokedex={() => {}} />
      </div>

    </div>
  );
}

export default PokemonDetail;