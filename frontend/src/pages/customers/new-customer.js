import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function NewCustomers() {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCPF_CNPJ] = useState('');
    const [id_office, setId_office] = useState('');
    const [id_scheme, setId_scheme] = useState('');

    async function handleSubmit(event) {
        const data = {
            'name': name, 
            'cpf_cnpj': cpf_cnpj,
            'id_escritorio': id_office,
            'id_plano': id_scheme
        };
        
        await api.post('/api/clientes', data, {
        }).then(() => {
            window.location.href = '/customers';
        });
        event.push('/customers')
    }

    const [offices, setOffices] = useState([]);
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        
        async function loadOffices() {
            const response = await api.get('/api/escritorios', {
            });
            setOffices(response.data)
        }
        async function loadSchemes() {
            const response = await api.get('/api/planos', {
            });
            setSchemes(response.data)
        }
    loadOffices();
    loadSchemes();
},
[]
)

    return (
        <div className="container">
        <form onSubmit = {handleSubmit}>
            <div className="form-group">
                <label>Cliente</label>
                <input
                    className="form-control" 
                    id="name"
                    placeholder="Nome do Cliente"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>CPF/CNPJ</label>
                <input
                    className="form-control" 
                    id="cpf_cnpj"
                    placeholder="CPF/CNPJ"
                    value={cpf_cnpj}
                    onChange={event => setCPF_CNPJ(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Unidade</label>
                
                <select className="form-control" onChange={event => setId_office(event.target.value)} >
                    {offices.map(office=> (
                        <option key={office.id_escritorio} value={office.id_escritorio}>
                            {office.nome_escritorio}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Plano</label>
                
                <select className="form-control" onChange={event => setId_scheme(event.target.value)} >
                    {schemes.map(scheme=> (
                        <option key={scheme.id_plano} value={scheme.id_plano}>
                            {scheme.nome_plano}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
            <Link to="/customers">
                <button className="btn btn-danger ml-2">Voltar</button>
            </Link>
        </form>
        </div>
    )
}