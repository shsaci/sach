var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  blurbs: blurbs,
  profile: profile
}

function blurbs (req, res) {
  knex('blurbs')
  .select()
  .then(function (allBlurbs) {
    res.json(allBlurbs)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR ' + err.message)
  })
}

function profile (req, res) {
  const p = req.params.id
  console.log(p)
  knex('entity')
  .where('entity.entityID', p)
  .join('blurbs', 'entity.entityID', '=', 'blurbs.entityID')
  .select()
  .then(function (users) {
    console.log(users)
    res.json(users)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR ' + err.message)
  })
}
