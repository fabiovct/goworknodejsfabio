const { authSecret } = require('./../../.env');
const db_connection = require('./../db_connection');
const jwt = require('jwt-simple');
var session = require('express-session');

module.exports = {

    async login(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        if (email && password) {
            
        const logging = await db_connection
        .select().from('adm').where({email: email, password: password})
        if(logging.length > 0){
            session.email = email
                res.json([{
                    login: email,
                     status: 'true',
                    msg: 'Usuario logado com sucesso'
                }]); 
        } else {
            res.json([{
                status: 'failed',
                errMsg: 'Incorrect Username and/or Password!'
              }]);
        }			
        res.end();
    } else {
        res.json([{
            status: 'failed',
            errMsg: 'Please enter Username and Password!'
          }]);
        res.end();
        }
    },

    async logout(res, response) {
        session.email = ''
        response.json("usuario deslogado")

    },
}