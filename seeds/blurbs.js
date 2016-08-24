
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('blurbs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blurbs').insert({blurb: 'MOST WINS: BELGIUM 6: M Schumacher 5: A Senna 4: J Clark 4: K Raikkonen u1', entityID: 'user1', time: '1471664993522'}),
        knex('blurbs').insert({blurb: 'Mid-season driver change 2 as Manor drop Rio Haryanto due lack of sponsorship. @RHaryantoracing quick and a nice guy u2', entityID: 'user2', time: '1471664993524'}),
        knex('blurbs').insert({blurb: 'My everything!! I love them!!💕 u3', entityID: 'user3', time: '1471664993526'}),
        knex('blurbs').insert({blurb: '"You keep trying. There is help and happiness ahead—a lot of it." —Jeffrey R. Holland u4', entityID: 'user4', time: '1471664993528'}),
        knex('blurbs').insert({blurb: 'Sunday best? Not this one 😐 Next Sunday is what it\'s all about 🗓 ⏳ ⏰ 🗣 F1 IS BACK IN SEVEN DAYS 📢', entityID: 'user1', time: '1471664993538'}),
        knex('blurbs').insert({blurb: 'Hockenheim Race Notebook (excluding Linkin Park nu-metal Rock joke): u2', entityID: 'user2', time: '1471664993548'}),
        knex('blurbs').insert({blurb: 'Well it has officially happened...Winston would rather watch cartoons and play with toys, than hang out with me!!', entityID: 'user3', time: '1471664993558'}),
        knex('blurbs').insert({blurb: 'In a relationship....... With Tim-Tams.', entityID: 'user4', time: '1471664993568'}),
        knex('blurbs').insert({blurb: 'POLE STATS: Drivers with at least one pole: 40 Most poles: Fangio, Senna, Prost (4)', entityID: 'user1', time: '1471664993578'}),
        knex('blurbs').insert({blurb: 'Good old Fernando, never misses an opportunity', entityID: 'user2', time: '1471664993588'}),
        knex('blurbs').insert({blurb: 'Emmi\'s Cute New Haircut & Style!!', entityID: 'user3', time: '1471664993598'}),
        knex('blurbs').insert({blurb: 'I\'m fully committed to creating the life I want.', entityID: 'user4', time: '1471664993608'}),
        knex('blurbs').insert({blurb: 'Family, that\'s all that matters.', entityID: 'user4', time: '1471664993618'}),
        knex('blurbs').insert({blurb: 'Here\'s some background on the 107% grid story and why RIC, VES, PER, HUL and BOT are under threat', entityID: 'user2', time: '1471664993628'}),
        knex('blurbs').insert({blurb: 'I could not be more excited!!!😆Ahhhh!!!!❤️', entityID: 'user3', time: '1471664993638'}),
        knex('blurbs').insert({blurb: 'rowValue4form3 Ladies and Gentleman, Mr. James May.', entityID: 'user1', time: '1471664993648'})
      ])
    })
}
