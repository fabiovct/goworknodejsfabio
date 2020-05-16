import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Offices from './pages/offices';
import NewOffices from './pages/offices/new-office';
import EditOffices from './pages/offices/edit-office';
import React from 'react';


   function Routes() {
      
            
    return (
      
        //<BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>    
                <Route path="/home" component={Home}/>

                <Route path="/offices" exact component={Offices}/>
                <Route path="/offices/new" exact component={NewOffices}/>
                <Route path="/offices/:id" exact component={EditOffices}/>

                

            </Switch>
        //</BrowserRouter>
        
    );
}


export default Routes;