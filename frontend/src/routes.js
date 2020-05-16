import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

import Offices from './pages/offices';
import NewOffices from './pages/offices/new-office';
import EditOffices from './pages/offices/edit-office';

import Schemes from './pages/schemes';
import NewSchemes from './pages/schemes/new-scheme';
import EditSchemes from './pages/schemes/edit-scheme';

import EditCustomers from './pages/customers/edit-customer';
import NewCustomers from './pages/customers/new-customer';
import Customers from './pages/customers';

import React from 'react';


   function Routes() {
      
            
    return (
      
            <Switch>
                <Route path="/" exact component={Login}/>    
                <Route path="/home" component={Home}/>

                <Route path="/offices" exact component={Offices}/>
                <Route path="/offices/new" exact component={NewOffices}/>
                <Route path="/offices/:id" exact component={EditOffices}/>

                <Route path="/schemes" exact component={Schemes}/>
                <Route path="/schemes/new" exact component={NewSchemes}/>
                <Route path="/schemes/:id" exact component={EditSchemes}/>

                <Route path="/customers" exact component={Customers}/>
                <Route path="/customers/new" exact component={NewCustomers}/>
                <Route path="/customers/:id" exact component={EditCustomers}/>



            </Switch>
        
    );
}


export default Routes;