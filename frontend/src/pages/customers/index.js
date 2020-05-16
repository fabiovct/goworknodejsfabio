import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Customers() {

    function deleteCustomer(id) {
        api.delete('/api/clientes', { data: { id: id }})
           .then((result) => {
               window.location.reload()
        })

    };

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        
        async function loadCustomers() {
            const response = await api.get('/api/clientes', {
            });
            setCustomers(response.data)
    }
    loadCustomers();
},
[]
)

    return (
        <>
        
        <div className="container">
        <h4>Clientes</h4>
        
        <table className="table">
        <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Operação</th>
                </tr>
        </thead>
            {customers.map(customer => (
                    
                <tbody key={customer.id_cliente}>
                <tr>
            <th>{customer.id_cliente}</th>
                <td>{customer.nome_cliente}</td>
                <td>
                    <Link to={'customers/'+customer.id_cliente}>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    </Link>
                    <button 
                        className="btn btn-danger btn-sm ml-2" 
                        onClick={() => deleteCustomer(customer.id_cliente)}
                    >Excluir</button>
                </td>
                </tr>
                </tbody>
    
            
            ))}
            </table>
            <Link to="offices/new">
            <button className="btn btn-success btn-sm">Nova Unidade</button>
            </Link>
            <Link to="/home">
            <button className="btn btn-danger btn-sm ml-2">Voltar</button>
            </Link>
            
            
        </div>
        </>

    )



}