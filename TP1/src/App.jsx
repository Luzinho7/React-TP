import "./style.css"
import "./normalize.css"
import pokemondata from './data/data.json';
import logo from './assets/PokemonLogo.png';
import CardPokemon from './Components/CardPokemon/CardPokemon.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';

function App() {
  const helloList = pokemondata.map((poke, index) => (
    <CardPokemon pokemondata={poke} key={index} />
  ));

  return (
    <>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <div className="lmj-layout-inner">
        <Sidebar />
        <main>{helloList}</main>
      </div>
    </>
  );
}
export default App;
