import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Schemes() {

    function deleteScheme(id) {
        api.delete('/api/planos', { data: { id: id }})
           .then((result) => {
            //    const data = result.data.data
               //this.props.toggle()
               window.location.reload()
        })
    };

    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        
        async function loadSchemes() {
            const response = await api.get('/api/planos', {
            });
            setSchemes(response.data)
    }
    loadSchemes();
},
[]
)



    return (
        <>
        
        <div className="container">
        <h4>Palnos</h4>
        
        <table className="table">
        <thead>
                <tr>
                    <th>#</th>
                    <th>Plano</th>
                    <th>Valor Mensal</th>
                </tr>
        </thead>
            {schemes.map(scheme => (
                    
                <tbody key={scheme.id_plano}>
                <tr>
            <th>{scheme.id_plano}</th>
                <td>{scheme.nome_plano}</td>
                <td>
                    <Link to={'schemes/'+scheme.id_plano}>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    </Link>
                    <button 
                        className="btn btn-danger btn-sm ml-2" 
                        onClick={() => deleteScheme(scheme.id_plano)}
                    >Excluir</button>
                </td>
                </tr>
                </tbody>
           
            ))}
            </table>
            <Link to="schemes/new">
            <button className="btn btn-success btn-sm">Novo Plano</button>
            </Link>
            <Link to="/home">
            <button className="btn btn-danger btn-sm ml-2">Voltar</button>
            </Link>
            
            
        </div>
        </>

    )



}