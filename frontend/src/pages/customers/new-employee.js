import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function NewEmployee(req) {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const id = req.match.params['id'];
    async function handleSubmit(event) {
        const data = {
            'id': id,
            'name': name, 
            'cpf': cpf,
        };
        
        await api.post('/api/usuarios', data, {
        }).then(() => {
            window.location.href = '/customers';
        });
        event.push('/customers')
    }
    return (
        <div className="container">
        <form onSubmit = {handleSubmit}>
            <div className="form-group">
                <label>Usuário</label>
                <input
                    className="form-control" 
                    id="name"
                    placeholder="Nome do Usuário"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>CPF</label>
                <input
                    className="form-control" 
                    id="cpf"
                    placeholder="CPF"
                    value={cpf}
                    onChange={event => setCPF(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
            <Link to="/customers">
                <button className="btn btn-danger ml-2">Voltar</button>
            </Link>
        </form>
        </div>
    )
}