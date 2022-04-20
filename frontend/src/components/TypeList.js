/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const TypeList = () => {
    const [types, setTypes] = useState([]);
 
    useEffect(() => {
        getTypes();
    },[]);
 
    const getTypes = async () => {
        const types = await axios.get('http://localhost:8080/types');
        setTypes(types.data);
    }
 
    const deleteType = async (id) =>{
        await axios.delete(`http://localhost:8080/types/${id}`);
        getTypes();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">AddType</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { types.map((type, index) => (
                        <tr key={type.id}>
                            <td>{index + 1}</td>
                            <td>{type.name}</td>
                            <td>
                                <Link to={`/edit/${type.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteType(type.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default TypeList