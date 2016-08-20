var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  profile: profile,
  blurbs: blurbs
}

function profile (req, res) {
  knex('entity')
  .select()
  .then(function (users) {
    console.log(users)
    res.json(users)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR ' + err.message)
  })
}

function blurbs (req, res) {
  knex('blurbs')
  .select()
  .then(function (allBlurbs) {
    // console.log(allBlurbs)
    res.json(allBlurbs)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR ' + err.message)
  })
}
