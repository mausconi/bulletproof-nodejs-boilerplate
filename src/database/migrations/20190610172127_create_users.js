
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().primary();
    table.string('email', 100).notNullable();
    table.string('username', 100).notNullable();
    table.string('password_digest', 128).notNullable();
    table.string('first_name', 100);
    table.string('last_name', 100);
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
