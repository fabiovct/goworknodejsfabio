import React, { useState } from 'react';
import api from '../../services/api';

export default function NewSchemes() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    async function handleSubmit(event) {
        const data = {
            'name': name, 
            'price': price,
        };
        
        await api.post('/api/planos', data, {
        }).then(() => {
            window.location.href = '/schemes';
        });
        event.push('/schemes')
    }
    return (
        <div className="container">
        <form onSubmit = {handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Planos</label>
                <input
                    className="form-control" 
                    id="name"
                    placeholder="Plano"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Valor Mensal</label>
                <input
                    className="form-control" 
                    id="price"
                    placeholder="valor Mensal"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
        </div>
    )
}