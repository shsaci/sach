
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('friends').insert({id: 1, entityID: 'form1', friendID: 'form2'}),
        knex('friends').insert({id: 2, entityID: 'form2', friendID: 'form1'}),
        knex('friends').insert({id: 3, entityID: 'form3', friendID: 'form4'}),
        knex('friends').insert({id: 4, entityID: 'form4', friendID: 'form3'})
      ])
    })
}
