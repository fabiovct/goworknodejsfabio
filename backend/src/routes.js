const express = require('express');
const AuthController = require('./controllers/AuthController');
const EscritoriosController = require('./controllers/EscritoriosController');
const PlanosController = require('./controllers/PlanosController');
const ClientesController = require('./controllers/ClientesController');
const passport = require('./passport');


const routes = express.Router();

//login
routes.post('/login', AuthController.login);

//logout
routes.route('/logout').all(passport.validate)
    .get(AuthController.logout);

//escritorios
routes.route('/api/escritorios').all(passport.validate)
    .get( EscritoriosController.list)
    .post( EscritoriosController.create)
    .put( EscritoriosController.edit)
    .delete( EscritoriosController.delete)

//planos
routes.route('/api/planos').all(passport.validate)
    .get( PlanosController.list)
    .post( PlanosController.create)
    .put( PlanosController.edit)
    .delete( PlanosController.delete)

//clientes
routes.route('/api/clientes').all(passport.validate)
    .get( ClientesController.list)
    .post( ClientesController.create)
    .put( ClientesController.edit)
    .delete( ClientesController.delete)


module.exports = routes;