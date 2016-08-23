
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('entity').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('entity').insert({id: 1, logoImg: '../images/form1logo.jpg', miniLogo: '../images/form174.jpg', des1: 'Description: The Official Formula 1® Blurb Account',
      des2: 'Great Britain Formula1.com', entityID: 'form1'}),
      knex('entity').insert({id: 2, logoImg: '../images/form2logo.jpg', miniLogo: '../images/form274.jpg', des1: 'Description: Lorem ipsum dolor sit amet',
      des2: 'USA Formula1.com', entityID: 'form2'}),
      knex('entity').insert({id: 3, logoImg: 'http://placekitten.com/g/650/200', miniLogo: '../images/lk74.jpg', des1: 'Description: Lorem ipsum dolor sit amet',
      des2: 'Aoife', entityID: 'form3'}),
      knex('entity').insert({id: 4, logoImg: 'http://placekitten.com/g/650/200', miniLogo: '../images/ih74.png', des1: 'Description: Lorem ipsum dolor sit amet',
      des2: 'Ciara', entityID: 'form4'})
    ])
  })
}
