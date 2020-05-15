const db_connection = require('./db_connection');
var session = require('express-session');
module.exports = {

    async validate(req,res, next){

        if(session.email){
            return next();
        }else{
            res.json([{
                status: 'failed',
                errMsg: 'Solicitação não permitida'
              }]);
        }
        
    }
    
}

