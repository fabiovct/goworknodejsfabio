import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
    
export default function EditEmployee(req) {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    console.log(req.match.params)

    const [employees, setEmployees] = useState([]);
    const id_usuario = req.match.params['id_usuario'];
    const id_cliente = req.match.params['id_cliente'];
    let inputName = React.createRef();
    let inputCPF = React.createRef();
    
    useEffect(() => {
        async function loadEmployee() {
            const response = await api.get('api/usuarios/edit/'+id_usuario, {
            });
            setEmployees(response.data)
        }
        loadEmployee();
    },
    []

    );

    async function handleSubmit(event) {
        event.preventDefault();
        
    const data = {
            'id': id_usuario,
            'name': inputName.current.value, 
            'cpf': inputCPF.current.value,
            'id_cliente': id_cliente
        };

        await api.put('/api/usuarios', data, {
        }).then(() => {
            window.location.href = '/customers';
        });
        event.push('/customers')
    }
        
    return (
        
        <div className="container">
        {employees.map(employee => (
            
        <form  key={id_usuario}>
        
            <div className="form-group">
            <label htmlFor="name">Usuario</label>
            <input
                type = "text"
                className="form-control" 
                id="name"
                ref={inputName}
                defaultValue={employee.nome_usuario}
                onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">CPF</label>
            <input
                className="form-control" 
                id="cpf"
                ref={inputCPF}
                defaultValue={employee.cpf_usuario}
                onChange={event => setCPF(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Submit</button>
            <Link to="/customers">
            <button className="btn btn-danger ml-2">Voltar</button>
            </Link>
            
        </form>
        ))}
        </div>
        
        )
    }