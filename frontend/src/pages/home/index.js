import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
//import {isAuthenticated} from "../../Authenticate"



export default function Home() {


    return (
        <div className="container col-4">
            <div className="jumbotron mt-5">
                <h3 className="text-center">MENU</h3>
            <button type="button" className="btn btn-primary btn-lg mt-3 col-12">ESCRITÓRIOS</button>
            <button type="button" className="btn btn-primary btn-lg mt-2 col-12">PLANOS</button>
            <button type="button" className="btn btn-primary btn-lg mt-2 col-12">CLIENTES</button>
            <button type="button" className="btn btn-danger btn-lg mt-5 col-12">Logout</button>
        </div>
        </div>
    )




}