import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
    
export default function EditCustomers(req) {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCPF_CNPJ] = useState('');
    const [id_office, setId_office] = useState('');
    const [id_scheme, setId_scheme] = useState('');

    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [offices, setOffices] = useState([]);
    const [schemes, setSchemes] = useState([]);

    const id = req.match.params['id'];
    let inputName = React.createRef();
    let inputCPF_CNPJ = React.createRef();
    let inputId_office = React.createRef();
    let inputId_scheme = React.createRef();

    function deleteEmployee(id) {
        api.delete('/api/usuarios', { data: { id: id }})
           .then((result) => {
               window.location.reload()
        })

    };
    
    useEffect(() => {
        async function loadCustomer() {
            const response = await api.get('api/clientes/'+id, {
            });
            setCustomers(response.data)
        }
        async function loadEmployees() {
            const data = {
                'id': id,
            };

            const response = await api.get('api/usuarios/'+id, {
                
            });
            setEmployees(response.data)
        }
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

        loadEmployees();
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
            'id_escritorio': inputId_office.current.value,
            'id_plano': inputId_scheme.current.value
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
            <div className="form-group">
                <label>Unidade</label>
                
                <select className="form-control" ref={inputId_office} defaultValue={customer.id_escritorio} onChange={event => setId_office(event.target.value)} >
                    {offices.map(office=> (
                        <option key={office.id_escritorio} value={office.id_escritorio}>
                            {office.nome_escritorio}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Plano</label>
                
                <select className="form-control" ref={inputId_scheme} defaultValue={customer.id_plano} onChange={event => setId_scheme(event.target.value)} >
                    {schemes.map(scheme=> (
                        <option key={scheme.id_plano} value={scheme.id_plano}>
                            {scheme.nome_plano}
                        </option>
                    ))}
                </select>
            </div>
            
            
            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Atualizar</button>
            
        </form>
        ))}
<br></br>
<p>Funcionários Cadastrados</p>
<table className="table mt-2">
    
        <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Operação</th>
                </tr>
        </thead>
            {employees.map(employee => (
                    
                <tbody key={employee.id_funcionarios}>
                <tr>
            <th>{employee.id_funcionarios}</th>
                <td>{employee.nome_usuario}</td>
                <td>
                    <Link to={'employees/edit/'+employee.id_funcionarios+'/'+id}>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    </Link>
                    

                    <button 
                        className="btn btn-danger btn-sm ml-2" 
                        onClick={() => deleteEmployee(employee.id_funcionarios)}
                    >Excluir</button>
                </td>
                </tr>
                </tbody>
    
            
            ))}
            </table>

            <Link to={'employees/new/'+id}>
                <button className="btn btn-success ml-2">Cadastrar Funcionários</button>
            </Link>

            <Link to="/customers">
                <button className="btn btn-danger ml-2">Voltar</button>
            </Link>

        </div>
        
        )
    }



