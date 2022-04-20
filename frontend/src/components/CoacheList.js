/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const CoacheList = () => {
    const [coaches, setCoaches] = useState([]);
 
    useEffect(() => {
        getCoaches();
    },[]);
 
    const getCoaches = async () => {
        const coaches = await axios.get('http://localhost:8080/coaches');
        setCoaches(coaches.data);
    }
 
    const deleteCoache = async (id) =>{
        await axios.delete(`http://localhost:8080/coaches/${id}`);
        getCoaches();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">AddCoache</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { coaches.map((coache, index) => (
                        <tr key={coache.id}>
                            <td>{index + 1}</td>
                            <td>{coache.name}</td>
                            <td>
                                <Link to={`/edit/${coache.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteCoache(coache.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default CoacheList