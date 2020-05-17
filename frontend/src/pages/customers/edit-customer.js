import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
    
export default function EditCustomers(req) {
    const [name, setName] = useState('');
    const [cpf_cnpj, setCPF_CNPJ] = useState('');

    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const id = req.match.params['id'];
    let inputName = React.createRef();
    let inputCPF_CNPJ = React.createRef();

    function deleteEmployee(id) {
        api.delete('/api/clientes', { data: { id: id }})
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
            console.log(data)

            const response = await api.get('api/usuarios/'+id, {
                
            });
            setEmployees(response.data)
        }

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



