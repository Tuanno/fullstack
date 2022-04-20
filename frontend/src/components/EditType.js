/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
 
const EditType = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateType = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/types/${id}`,{
            name: name
        });
        navigate.push("/");
    }
 
    useEffect(() => {
        getTypeById();
    },[]);
 
    const getTypeById = async () => {
        const response = await axios.get(`http://localhost:8080/types/${id}`);
        setName(response.data.name);
    }
 
    return (
        <div>
            <form onSubmit={ updateType }>
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
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditType