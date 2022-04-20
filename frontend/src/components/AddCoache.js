import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from "axios";
 
const AddCoache = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
 
    const saveCoache = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/coaches',{
            name: name
        });
        navigate.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveCoache }>
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
                    <button className="button is-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddCoache