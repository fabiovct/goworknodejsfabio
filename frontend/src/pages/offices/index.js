import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Offices() {

    function deleteOffice(id) {
        api.delete('/api/escritorios', { data: { id: id }})
           .then((result) => {
            //    const data = result.data.data
               //this.props.toggle()
               window.location.reload()
        })

    };

    const [offices, setOffices] = useState([]);

    useEffect(() => {
        
        async function loadOffices() {
            const response = await api.get('/api/escritorios', {
            });
            setOffices(response.data)
    }
    loadOffices();
},
[]
)



    return (
        <>
        
        <div className="container">
        <h4>Escritorios</h4>
        
        <table className="table">
        <thead>
                <tr>
                    <th>#</th>
                    <th>Unidade</th>
                    <th>Operação</th>
                </tr>
        </thead>
            {offices.map(office => (
                    
                <tbody key={office.id_escritorio}>
                <tr>
            <th>{office.id_escritorio}</th>
                <td>{office.nome_escritorio}</td>
                <td>
                    <Link to={'offices/'+office.id_escritorio}>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    </Link>
                    <button 
                        className="btn btn-danger btn-sm ml-2" 
                        onClick={() => deleteOffice(office.id_escritorio)}
                    >Excluir</button>
                </td>
                </tr>
                </tbody>
    
            
            ))}
            </table>
            <Link to="offices/new">
            <button className="btn btn-success btn-sm">Nova Unidade</button>
            </Link>
            
            
        </div>
        </>

    )



}