import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function NewOffices() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    async function handleSubmit(event) {
        const data = {
            'name': name, 
            'address': address,
        };
        
        await api.post('/api/escritorios', data, {
        }).then(() => {
            window.location.href = '/offices';
        });
        event.push('/offices')
    }
    return (
        <div className="container">
        <form onSubmit = {handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Unidades</label>
                <input
                    className="form-control" 
                    id="name"
                    placeholder="Nome do Escritório"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Endereço</label>
                <input
                    className="form-control" 
                    id="address"
                    placeholder="Endereço"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
            <Link to="/offices">
                <button className="btn btn-danger ml-2">Voltar</button>
            </Link>
            
        </form>
        </div>
    )
}