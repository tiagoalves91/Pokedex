import { useState, useEffect } from 'react';
import Axios from 'axios';
import pokemonCard from '../css/pokemonCard.css'


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
  
  
    console.log(props.pokemonId)
    
    return (
        <div className="card-info"
>
        {pokemonInfo.map((el) => {
          if (props.pokemonId === el.id) {

            return (
              <section>
              <img className="card-image" src={el.imageUrl} />
              <h2>{el.name}</h2>
              <p>Type: {el.types}</p>
              </section>

              )
            }
          })}
          </div>
        
    );
  }
  