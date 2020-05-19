import { Switch, Route, Redirect } from 'react-router-dom';
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
import NewEmployee from './pages/customers/new-employee';
import EditEmployee from './pages/customers/edit-employee';

import React from 'react';

   function Routes() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            localStorage.getItem('status') ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
          }
        />
      );
             
    return (
      
            <Switch>
                <Route path="/" exact component={Login}/>    
                <PrivateRoute path="/home" component={Home}/>

                <PrivateRoute path="/offices" exact component={Offices}/>
                <PrivateRoute path="/offices/new" exact component={NewOffices}/>
                <PrivateRoute path="/offices/:id" exact component={EditOffices}/>

                <PrivateRoute path="/schemes" exact component={Schemes}/>
                <PrivateRoute path="/schemes/new" exact component={NewSchemes}/>
                <PrivateRoute path="/schemes/:id" exact component={EditSchemes}/>

                <PrivateRoute path="/customers" exact component={Customers}/>
                <PrivateRoute path="/customers/new" exact component={NewCustomers}/>
                <PrivateRoute path="/customers/:id" exact component={EditCustomers}/>
                <PrivateRoute path="/customers/employees/new/:id" exact component={NewEmployee}/>
                <PrivateRoute path="/customers/employees/edit/:id_usuario/:id_cliente" exact component={EditEmployee}/>
            </Switch>
        
    );
}

export default Routes;