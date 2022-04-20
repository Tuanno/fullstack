/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
 
    useEffect(() => {
        getPokemons();
    },[]);
 
    const getPokemons = async () => {
        const pokemons = await axios.get('http://localhost:8080/pokemons');
        setPokemons(pokemons.data);
    }
 
    const deletePokemon = async (id) =>{
        await axios.delete(`http://localhost:8080/pokemons/${id}`);
        getPokemons();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { pokemons.map((pokemon, index) => (
                        <tr key={pokemon.id}>
                            <td>{index + 1}</td>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.level}</td>
                            <td>
                                <Link to={`/edit/${pokemon.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deletePokemon(pokemon.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default PokemonList