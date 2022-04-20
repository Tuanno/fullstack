import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from "axios";
 
const AddPokemon = () => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate();
 
    const savePokemon = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/pokemons',{
            name: name,
            level: level
        });
        navigate.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ savePokemon }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddPokemon