
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
      knex('entity').insert({id: 3, logoImg: '../images/form3logo.png', miniLogo: '../images/form374.jpeg', des1: 'When you smile I feel all my passion unfolding! Love your face.',
      des2: 'Aoife', entityID: 'user3'}),
      knex('entity').insert({id: 4, logoImg: '../images/form4logo.jpg', miniLogo: '../images/form474.jpg', des1: 'The sound of your heart, it is the most significant sound in my world',
      des2: 'Ciara', entityID: 'user4'})
    ])
  })
}
