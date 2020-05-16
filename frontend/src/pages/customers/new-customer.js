import React, { useState } from 'react';
import api from '../../services/api';

export default function NewCustomers() {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCPF_CNPJ] = useState('');

    async function handleSubmit(event) {
        const data = {
            'name': name, 
            'cpf_cnpj': cpf_cnpj,
        };
        
        await api.post('/api/clientes', data, {
        }).then(() => {
            window.location.href = '/customers';
        });
        event.push('/customers')
    }
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
            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
        </div>
    )
}