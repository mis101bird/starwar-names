var allPeople = require('./starwar.json')
var random = require('unique-random-array')

function randomArray (count) {
  var list = []
  for (var i = 0; i < count; i++) {
    list.push(random(allPeople)())
  }
  return list
}

module.exports = {
  all: allPeople,
  random: randomArray
}
