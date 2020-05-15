exports.up = function(knex) {
    return knex.schema.createTable('escritorios', table =>{
        table.increments('id_escritorio').primary()
        table.string('nome_escritorio').notNull().unique()
        table.string('endereco_escritorio')
        table.string('telefone_escritorio')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('escritorios')
  
};
