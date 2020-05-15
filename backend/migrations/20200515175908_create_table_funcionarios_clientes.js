exports.up = function(knex) {
    return knex.schema.createTable('funcionarios_clientes', table =>{
        table.increments('id_funcionarios').primary()
        table.string('nome_usuario').notNull()
        table.string('email_usuario').notNull().unique()
        table.string('password_usuario').notNull()
        table.integer('id_cliente').unsigned()
        table.foreign('id_cliente').references('clientes.id_cliente')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('adm')
};
