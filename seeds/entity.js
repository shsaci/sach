
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('entity').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('entity').insert({id: 1, logoImg: '../images/form1logo.jpg', miniLogo: '../images/form174.jpg', des1: 'If you ain\'t on the gas I will be kickin yo *ss!',
      des2: 'Great Britain Formula1.com', entityID: 'user1'}),
      knex('entity').insert({id: 2, logoImg: '../images/form2logo.jpg', miniLogo: '../images/form274.jpg', des1: 'If you have everything under control, you are not moving fast enough!',
      des2: 'USA Formula1', entityID: 'user2'}),
      knex('entity').insert({id: 3, logoImg: 'http://placekitten.com/g/650/200', miniLogo: '../images/form374.jpeg', des1: 'Aoife',
      des2: 'When you smile I feel all my passion unfolding! Love your face.', entityID: 'user3'}),
      knex('entity').insert({id: 4, logoImg: 'http://placekitten.com/g/650/200', miniLogo: '../images/form474.jpg', des1: 'The sound of your heart, it is the most significant sound in my world',
      des2: 'Ciara', entityID: 'user4'})
    ])
  })
}
