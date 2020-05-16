const db_connection = require('./../db_connection');


module.exports = {
    async list(req, res) {
        try{
        const list =  await db_connection.select().from('clientes')
        res.json(list)
        }catch(e){
            res.json({erro: e, msg: 'Erro ao Listar Clientes'})
        }
    },
    async create(req,res) {
        try{
        var name = req.body.name
        var cpf_cnpj = req.body.cpf_cnpj
        var id_escritorio = req.body.id_escritorio
        var id_plano = req.body.id_plano

        const createCustomer = await db_connection('clientes')
        .insert([{
            nome_cliente: name, 
            cpf_cnpj: cpf_cnpj, 
            id_escritorio: id_escritorio,
            id_plano: id_plano
        }])
        res.json(createCustomer)
    } catch(e){
        res.json({erro: e, msg: 'Erro ao Cadastrar Cliente'})
    }   
    },

    async edit(req,res) {
        try{
        var id = req.body.id
        var name = req.body.name
        var cpf_cnpj = req.body.cpf_cnpj
        var id_escritorio = req.body.id_escritorio
        var id_plano = req.body.id_plano

        const updatePlano = await db_connection('clientes')
        .where({
            id_cliente: id
        })
        .update({
            nome_cliente: name, 
            cpf_cnpj: cpf_cnpj, 
            id_escritorio: id_escritorio,
            id_plano: id_plano
        })

        res.json(updatePlano)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Atualizar Cliente'})
    } 
        
    },
    async delete(req,res) {
        try{
        var id = req.body.id
        const deleteCliente = await db_connection('clientes')
        .where('id_cliente', id).del()

        res.json(deleteCliente)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Excluir Cliente'})
    }
        
    }

}