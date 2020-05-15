const db_connection = require('./../db_connection');


module.exports = {
    async list(req, res) {
        try{
        const list =  await db_connection.select().from('escritorios')
        res.json(list)
        }catch(e){
            res.json({erro: e, msg: 'Erro ao Listar Escritórios'})
        }
    },
    async create(req,res) {
        try{
        var name = req.body.name
        var address = req.body.address
        var numberPhone = req.body.numberPhone

        const createOfficce = await db_connection('escritorios')
        .insert([{
            nome_escritorio: name, 
            endereco_escritorio: address, 
            telefone_escritorio: numberPhone
        }])
        //.into('escritorios')
        res.json(createOffice)
    } catch(e){
        res.json({erro: e, msg: 'Erro ao Cadastrar Escritório'})
    }   
    },

    async edit(req,res) {
        try{
        var id = req.body.id
        var name = req.body.name
        var address = req.body.address
        var numberPhone = req.body.numberPhone

        const updateOffice = await db_connection('escritorios')
        .where({
            id_escritorio: id
        })
        .update({
            nome_escritorio: name, 
            endereco_escritorio: address, 
            telefone_escritorio: numberPhone
        })

        res.json(updateOffice)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Atualizar Escritório'})
    } 
        
    },
    async delete(req,res) {
        try{
        var id = req.body.id
        const deleteOffice = await db_connection('escritorios')
        .where('id_escritorio', id).del()

        res.json(deleteOffice)
    }catch(e){
        res.json({erro: e, msg: 'Erro ao Excluir Escritório'})
    }
        
    }

}