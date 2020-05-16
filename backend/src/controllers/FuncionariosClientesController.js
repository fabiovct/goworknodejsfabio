const db_connection = require('./../db_connection');


module.exports = {
    async list(req, res) {
        try{
        const list =  await db_connection.select().from('funcionarios_clientes')
        res.json(list)
        }catch(e){
            res.json({erro: e, msg: 'Erro ao Listar Usuários'})
        }
    },
    async create(req,res) {
        try{
        var name = req.body.name
        var email = req.body.email
        var password = req.body.password
        var id_cliente = req.body.id_cliente

        const createUser = await db_connection('funcionarios_clientes')
        .insert([{
            nome_usuario: name, 
            email_usuario: email, 
            password_usuario: password,
            id_cliente: id_cliente
        }])
        res.json(createUser)
    } catch(e){
        res.json({erro: e, msg: 'Erro ao Cadastrar Usuário'})
    }   
    },

    async edit(req,res) {
        try{
        var id = req.body.id
        var name = req.body.name
        var email = req.body.email
        var password = req.body.password
        var id_cliente = req.body.id_cliente

        const updateUser = await db_connection('funcionarios_clientes')
        .where({
            id_funcionarios: id
        })
        .update({
            nome_usuario: name, 
            email_usuario: email, 
            password_usuario: password,
            id_cliente: id_cliente
        })

        res.json(updateUser)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Atualizar Usuário'})
    } 
        
    },
    async delete(req,res) {
        try{
        var id = req.body.id
        const deleteUser = await db_connection('funcionarios_clientes')
        .where('id_funcionarios', id).del()

        res.json(deleteUser)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Excluir Usuário'})
    }
        
    }

}