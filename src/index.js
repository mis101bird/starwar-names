var allPeople = require('./starwar.json')
var random = require('unique-random-array')

module.exports = {
  all: allPeople,
  random: random(allPeople)()
}
