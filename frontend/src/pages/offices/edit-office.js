import React, { useEffect, useState} from 'react';
import api from '../../services/api';
    
export default function EditOffices(req) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const [offices, setOffice] = useState([]);
    const id = req.match.params['id'];
    let inputName = React.createRef();
    let inputAddress = React.createRef();
    
    useEffect(() => {
        async function loadOffice() {
            const response = await api.get('api/escritorios/'+id, {
            });
            setOffice(response.data)
        }
        loadOffice();
    },
    []

    );

    async function handleSubmit(event) {
        event.preventDefault();
        
    const data = {
            'id': id,
            'name': inputName.current.value, 
            'address': inputAddress.current.value,
        };

        await api.put('/api/escritorios', data, {
        }).then(() => {
            window.location.href = '/offices';
        });
        event.push('/offices')
    }
        
    return (
        
        <div className="container">
        {offices.map(office => (
            
        <form  key={id}>
        
            <div className="form-group">
            <label htmlFor="name">Unidade</label>
            <input
            type = "text"
            className="form-control" 
            id="name"
            ref={inputName}
            defaultValue={office.nome_escritorio}
            onChange={event => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="preco">Endereço</label>
            <input
            className="form-control" 
            id="address"
            ref={inputAddress}
            defaultValue={office.endereco_escritorio}
            onChange={event => setAddress(event.target.value)}
            />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Submit</button>
            
        </form>
        ))}
        </div>
        
        )
    }



