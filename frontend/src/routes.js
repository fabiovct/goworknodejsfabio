import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import React from 'react';


   function Routes() {
      
            
    return (
      
        //<BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>    
  
                <Route path="/home" component={Home}/>

            </Switch>
        //</BrowserRouter>
        
    );
}


export default Routes;