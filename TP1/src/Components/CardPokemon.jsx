import { useState } from 'react';
import './CardPokemon.scss';

  export function CardPokemon(props) {
  let poke = props.pokemondata;
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <article
      key={props.index}
      data-reverse={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className="cardInner"
        style={{
          backgroundColor: getColorHexa(poke.apiTypes[0].name),
          borderColor: getColorHexa(poke.apiTypes[0].name),
        }}
      >
        <figure className="cardFront">
          <picture>
            <img src={poke.image} alt={poke.name} title={poke.name} />
          </picture>
          <figcaption>
            <span className="types" style={{ backgroundColor: getColorHexa(poke.apiTypes[0].name) }}>
              {poke.apiTypes[0].name}
            </span>
            <h2>{poke.name}</h2>
            <ol>
              <li>Points de vie : {poke.stats.HP}</li>
              <li>Attaque : {poke.stats.attack}</li>
              <li>Défense : {poke.stats.defense}</li>
              <li>Attaque spécial : {poke.stats.special_attack}</li>
              <li>Vitesse : {poke.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>
        <div className="cardBack">
          
        </div>
      </div>
    </article>
  );
}
export function getColorHexa(type) {
    const colors = {
    normal: '#A8A878',
    feu: '#F08030',
    eau: '#6890F0',
    electrique: '#F8D030',
    plante: '#78C850',
    glace: '#98D8D8',
    combat: '#C03028',
    poison: '#A040A0',
    sol: '#E0C068',
    vol: '#A890F0',
    psy: '#F85888',
    insecte: '#A8B820',
    roche: '#B8A038',
    spectre: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    acier: '#B8B8D0',
    fée: '#EE99AC',
  };
  return colors[type?.toLowerCase()] || '#FFFFFF';
}

export default CardPokemon;