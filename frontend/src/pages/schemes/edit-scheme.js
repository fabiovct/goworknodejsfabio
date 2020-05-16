import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
    
export default function EditSchemes(req) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [schemes, setScheme] = useState([]);
    const id = req.match.params['id'];
    let inputName = React.createRef();
    let inputPrice = React.createRef();
    
    useEffect(() => {
        async function loadScheme() {
            const response = await api.get('api/planos/'+id, {
            });
            setScheme(response.data)
        }
        loadScheme();
    },
    []

    );

    async function handleSubmit(event) {
        event.preventDefault();
        
    const data = {
            'id': id,
            'name': inputName.current.value, 
            'price': inputPrice.current.value,
        };

        await api.put('/api/planos', data, {
        }).then(() => {
            window.location.href = '/schemes';
        });
        event.push('/schemes')
    }
        
    return (
        
        <div className="container">
        {schemes.map(scheme => (
            
        <form  key={id}>
        
            <div className="form-group">
            <label htmlFor="name">Plano</label>
            <input
                type = "text"
                className="form-control" 
                id="name"
                ref={inputName}
                defaultValue={scheme.nome_plano}
                onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Valor Mensal</label>
            <input
                className="form-control" 
                id="price"
                ref={inputPrice}
                defaultValue={scheme.valor_mensal}
                onChange={event => setPrice(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Atualizar</button>
            <Link to="/schemes">
            <button className="btn btn-danger ml-2">Voltar</button>
            </Link>
            
        </form>
        ))}
        </div>
        
        )
    }



