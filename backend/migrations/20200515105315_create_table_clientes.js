exports.up = function(knex) {
    return knex.schema.createTable('clientes', table =>{
        table.increments('id_cliente').primary()
        table.string('nome_cliente').notNull()
        table.string('cpf_cnpj').notNull().unique()
        table.integer('id_escritorio').unsigned()
        table.foreign('id_escritorio').references('escritorios.id_escritorio')
        table.integer('id_plano').unsigned()
        table.foreign('id_plano').references('planos_coworking.id_plano')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes')
};
