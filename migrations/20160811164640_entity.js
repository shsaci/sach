
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entity', function (table) {
    table.increments('id').primary()
    table.string('logoImg')
    table.string('des1')
    table.string('des2')
    table.string('entityID')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entity')
};
