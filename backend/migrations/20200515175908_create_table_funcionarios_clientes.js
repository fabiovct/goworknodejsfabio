exports.up = function(knex) {
    return knex.schema.createTable('funcionarios_clientes', table =>{
        table.increments('id_funcionarios').primary()
        table.string('nome_usuario').notNull()
        table.string('cpf_usuario').notNull().unique()
        table.integer('id_cliente').unsigned()
        table.foreign('id_cliente').references('clientes.id_cliente')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('adm')
};
