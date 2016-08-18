
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entity').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('entity').insert({id: 1, logoImg: 'http://placekitten.com/g/680/190', des1: 'Description: Lorem ipsum dolor sit amet',
      des2: 'Great Britain Formula1.com', entityID: 'form1'}),
      knex('entity').insert({id: 2, logoImg: 'http://placekitten.com/g/680/190', des1: 'Description: Lorem ipsum dolor sit amet',
      des2: 'USA Formula1.com', entityID: 'form2'})
    ]);
  });
};
