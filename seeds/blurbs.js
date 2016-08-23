
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('blurbs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blurbs').insert({blurb: 'rowValue1form1 May take this for a spin in a minute... ', entityID: 'form1', time: '1471664993522'}),
        knex('blurbs').insert({blurb: 'rowValue2form2 Four world champions Four legends ', entityID: 'form2', time: '1471664993524'}),
        knex('blurbs').insert({blurb: 'rowValue3form1 Alles Gute zum Geburtstag, Nico!', entityID: 'form1', time: '1471664993526'}),
        knex('blurbs').insert({blurb: 'rowValue4form2 Ladies and Gentleman, Mr. James May.', entityID: 'form2', time: '1471664993528'}),
        knex('blurbs').insert({blurb: 'rowValue4form3 Ladies and Gentleman, Mr. James May.', entityID: 'form3', time: '1471664993538'}),
        knex('blurbs').insert({blurb: 'rowValue4form4 Ladies and Gentleman, Mr. James May.', entityID: 'form4', time: '1471664993548'}),
        knex('blurbs').insert({blurb: 'rowValue4form3 Ladies and Gentleman, Mr. James May.', entityID: 'form3', time: '1471664993558'}),
        knex('blurbs').insert({blurb: 'rowValue4form4 Ladies and Gentleman, Mr. James May.', entityID: 'form4', time: '1471664993568'})
      ])
    })
}
