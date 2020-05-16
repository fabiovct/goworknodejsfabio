import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Routes from './routes';
import Header from './components/Header';
import {BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
