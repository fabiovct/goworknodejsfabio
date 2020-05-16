import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
    
export default function EditCustomers(req) {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCPF_CNPJ] = useState('');

    const [customers, setCustomers] = useState([]);
    const id = req.match.params['id'];
    let inputName = React.createRef();
    let inputCPF_CNPJ = React.createRef();
    
    useEffect(() => {
        async function loadCustomer() {
            const response = await api.get('api/clientes/'+id, {
            });
            setCustomers(response.data)
        }
        loadCustomer();
    },
    []

    );

    async function handleSubmit(event) {
        event.preventDefault();
        
    const data = {
            'id': id,
            'name': inputName.current.value, 
            'cpf_cnpj': inputCPF_CNPJ.current.value,
        };

        await api.put('/api/clientes', data, {
        }).then(() => {
            window.location.href = '/customers';
        });
        event.push('/customers')
    }
        
    return (
        
        <div className="container">
        {customers.map(customer => (
            
        <form  key={id}>
        
            <div className="form-group">
            <label>Cliente</label>
            <input
                type = "text"
                className="form-control" 
                id="name"
                ref={inputName}
                defaultValue={customer.nome_cliente}
                onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">CPF/CNPJ</label>
            <input
                className="form-control" 
                id="cpf_cnpj"
                ref={inputCPF_CNPJ}
                defaultValue={customer.cpf_cnpj}
                onChange={event => setCPF_CNPJ(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Atualizar</button>
            <Link to="/customers">
            <button className="btn btn-danger ml-2">Voltar</button>
            </Link>
            
        </form>
        ))}
        </div>
        
        )
    }



