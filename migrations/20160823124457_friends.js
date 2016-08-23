
exports.up = function (knex, Promise) {
  return knex.schema.createTable('friends', function (table) {
    table.increments('id').primary()
    table.string('entityID')
    table.string('friendID')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('friends')
}
