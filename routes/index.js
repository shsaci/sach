var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  blurbs: blurbs,
  profile: profile,
  add: add
}

function blurbs (req, res) {
  knex('entity')
  .join('blurbs', 'entity.entityID', '=', 'blurbs.entityID')
  .orderBy('time', 'desc')
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

function add (req, res) {
  const id = req.params.id
  const blurb = req.body.blurb
  const time = req.body.time
  console.log(id, blurb, time)
  knex('blurbs')
    .insert({
      entityID: id,
      blurb: blurb,
      time: time
    })
    .then(function () {
      res.status(201).send()
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
