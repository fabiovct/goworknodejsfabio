const express = require('express');
const AuthController = require('./controllers/AuthController');
const EscritoriosController = require('./controllers/EscritoriosController');
const PlanosController = require('./controllers/PlanosController');
const ClientesController = require('./controllers/ClientesController');
const FuncionariosClientesController = require('./controllers/FuncionariosClientesController');
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
routes.route('/api/escritorios/:id').all(passport.validate)
    .get(EscritoriosController.selectById);

//planos
routes.route('/api/planos').all(passport.validate)
    .get( PlanosController.list)
    .post( PlanosController.create)
    .put( PlanosController.edit)
    .delete( PlanosController.delete)
routes.route('/api/planos/:id').all(passport.validate)
    .get(PlanosController.selectById);

//clientes
routes.route('/api/clientes').all(passport.validate)
    .get( ClientesController.list)
    .post( ClientesController.create)
    .put( ClientesController.edit)
    .delete( ClientesController.delete)
routes.route('/api/clientes/:id').all(passport.validate)
    .get(ClientesController.selectById);

//usuarios
routes.route('/api/usuarios').all(passport.validate)
    .post( FuncionariosClientesController.create)
    .put( FuncionariosClientesController.edit)
    .delete( FuncionariosClientesController.delete)
routes.route('/api/usuarios/:id').all(passport.validate)
    .get(FuncionariosClientesController.list);
routes.route('/api/usuarios/edit/:id').all(passport.validate)
    .get(FuncionariosClientesController.selectById);

module.exports = routes;