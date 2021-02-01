import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import pokemonList from '../css/pokemonList.css';
import PokemonCard from '../components/PokemonCard';
import Table from 'react-bootstrap/Table';
import SearchPokemon from '../components/SearchPokemon';


export default function PokemonList() {

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonId, setPokemonId] = useState('det1-4');

  const [test, setTest] = useState("")

  const fetchPokemonData = () => {
    Axios.get(`https://api.pokemontcg.io/v1/cards`).then((response) => {
      setPokemonData(response.data.cards.map((el) => el));

    });
  };


  useEffect(() => {
    fetchPokemonData();
  }, []);

   const options = pokemonData.map(el => ({
    value : el.id,
    label : el.name
  }))

  const onChange =(value) => {

    let aux = value.value
    setPokemonId(aux);
  }


  

  return (
    <div className="App">
      <div className="search-pokemon">
        <SearchPokemon onChange={onChange} options={options} />
      </div>
      <div className="together">
        <div className="pokemon-list">
          <Table key={pokemonData.id} striped bordered hover>
            <thead>
              <tr>
                <th>#Num</th>
                <th>Name</th>
                <th>Type</th>
                <th>ShowCard</th>
              </tr>
            </thead>
            {pokemonData
              .sort((a, b) => a.nationalPokedexNumber - b.nationalPokedexNumber)
              .map((el) => {
                if (el.nationalPokedexNumber >= 0) {
                  return (
                    <tbody>
                      <tr key={el.id}>
                        <td>{el.nationalPokedexNumber}</td>
                        <td>{el.name}</td>
                        <td>{el.types}</td>
                        <button className="list-button"
                          onClick={() => {
                            {
                              setPokemonId(el.id);
                            }
                          }}
                        ></button>
                      </tr>
                    </tbody>
                  );
                }
              })}
          </Table>
        </div>
        <div className="pokemon-card-image">
          <PokemonCard pokemonId={pokemonId} />
        </div>
      </div>
    </div>
  );
}
