exports.up = function(knex) {
    return knex.schema.createTable('planos_coworking', table =>{
        table.increments('id_plano').primary()
        table.string('nome_plano').notNull().unique()
        table.float('valor_mensal', 4,2).notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('planos_coworking')
};
