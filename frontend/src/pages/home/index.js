import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
//import {isAuthenticated} from "../../Authenticate"



export default function Home() {

    function logout() {
        api.get('/logout')
           .then((result) => {
                localStorage.removeItem('status');
                window.location.href = '/';
        })

    };


    return (
        <div className="container col-4">
            <div className="jumbotron mt-5">
                <h3 className="text-center">MENU</h3>
            <Link to="offices">
            <button type="button" className="btn btn-primary btn-lg mt-3 col-12">ESCRITÓRIOS</button>
            </Link>
            <Link to="schemes">
            <button type="button" className="btn btn-primary btn-lg mt-2 col-12">PLANOS</button>
            </Link> 
            <Link to="customers">
            <button type="button" className="btn btn-primary btn-lg mt-2 col-12">CLIENTES</button>
            </Link>
            <button 
                type="button" 
                className="btn btn-danger btn-lg mt-5 col-12"
                onClick={() => logout()}
            >Logout</button>
        </div>
        </div>
    )




}