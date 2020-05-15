const db_connection = require('./../db_connection');

module.exports = {
    async list(req, res) {
        try{
        const list =  await db_connection.select().from('planos_coworking')
        res.json(list)
        }catch(e){
            res.json({erro: e, msg: 'Erro ao Listar Palnos'})
        }
    },
    async create(req,res) {
        try{
        var name = req.body.name
        var price = req.body.price

        const createScheme = await db_connection('planos_coworking')
        .insert([{
            nome_plano: name, 
            valor_mensal: price, 

        }])
        res.json(createScheme)
    } catch(e){
        res.json({erro: e, msg: 'Erro ao Cadastrar Plano'})
    }   
    },

    async edit(req,res) {
        try{
        var id = req.body.id
        var name = req.body.name
        var price = req.body.price


        const updateScheme = await db_connection('planos_coworking')
        .where({
            id_plano: id
        })
        .update({
            nome_plano: name, 
            valor_mensal: price,
        })

        res.json(updateScheme)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Atualizar Plano'})
    } 
        
    },
    async delete(req,res) {
        try{
        var id = req.body.id
        const deleteScheme = await db_connection('planos_coworking')
        .where('id_plano', id).del()

        res.json(deleteScheme)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Excluir Plano'})
    }
        
    }

}