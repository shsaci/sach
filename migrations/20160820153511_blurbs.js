
exports.up = function (knex, Promise) {
  return knex.schema.createTable('blurbs', function (table) {
    table.increments('id').primary()
    table.string('blurb')
    table.string('entityID')
    table.string('time')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('blurbs')
}
