import { useState, useEffect } from 'react';
import Axios from 'axios';
import pokemonCard from '../css/pokemonCard.css';

export default function PokemonCard(props) {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const fetchPokemonInfo = () => {
    Axios.get(`https://api.pokemontcg.io/v1/cards`).then((response) => {
      setPokemonInfo(response.data.cards.map((el) => el));
    });
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Fire':
        return '#ef5350';
      case 'Water':
        return '#29b6f6';
      case 'Grass':
        return '#66bb6a';
      case 'Psychic':
        return '#ab47bc';
      case 'Fighting':
        return '#ffa726';
      case 'Lightning':
        return '#fdd835';
      default:
        return '#333';
    }
  };

  return (
    <div className="card-info">
      {pokemonInfo.map((el) => {
        if (props.pokemonId === el.id) {
          return (
            <section>
                <img className="card-image" src={el.imageUrl} />
                <h2>{el.name}</h2>
                <label>Type </label>
                <p style={{ color: getTypeColor(el.types[0]) }}>
                  {el.types[0]}
                </p>

               {/* <label>Strong Against </label>
                <p style={{ color: getTypeColor(el.resistances.types[0]) }}>
                  {el.resistances.types[0]}
                </p>*/}
               

                <p></p>
            </section>

            
          );
        }
      })}
    </div>
  );
}
