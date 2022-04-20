/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
 
const EditPokemon = () => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updatePokemon = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/pokemons/${id}`,{
            name: name,
            level: level
        });
        navigate.push("/");
    }
 
    useEffect(() => {
        getPokemonById();
    },[]);
 
    const getPokemonById = async () => {
        const response = await axios.get(`http://localhost:8080/pokemons/${id}`);
        setName(response.data.name);
        setLevel(response.data.level);
    }
 
    return (
        <div>
            <form onSubmit={ updatePokemon }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        type="text"
                        className="input"
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) }
                        placeholder="Name"
                    />
                </div>
                <div className="field">
                    <label className="label">Level</label>
                    <input 
                        type="text"
                        className="input"
                        value={ level } 
                        onChange={ (e) => setLevel(e.target.value) }
                        placeholder="Level"
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditPokemon