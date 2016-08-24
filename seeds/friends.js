
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('friends').insert({id: 1, entityID: 'user1', friendID: 'user2'}),
        knex('friends').insert({id: 2, entityID: 'user2', friendID: 'user1'}),
        knex('friends').insert({id: 3, entityID: 'user3', friendID: 'user4'}),
        knex('friends').insert({id: 4, entityID: 'user4', friendID: 'user3'})
      ])
    })
}
