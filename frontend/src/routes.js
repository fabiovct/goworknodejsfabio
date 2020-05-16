import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Offices from './pages/offices';
import React from 'react';


   function Routes() {
      
            
    return (
      
        //<BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>    
                <Route path="/home" component={Home}/>
                <Route path="/offices" component={Offices}/>
                

            </Switch>
        //</BrowserRouter>
        
    );
}


export default Routes;