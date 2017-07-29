var lib = require('./index')
var expect = require('chai').expect

describe('star-war', function () {
  it('should be array of string', function () {
    expect(lib.all).to.satisfy(isArrayOfObject)

    function isArrayOfObject (array) {
      return array.every(function (item) {
        return typeof item === 'string'
      })
    }
  })
})

describe('random', function () {
  it('return array of random items', function () {
    expect(lib.random(3)).to.satisfy(isArrayOfObject)

    function isArrayOfObject (array) {
      if (array.length === 3) {
        return array.every(function (item) {
          return typeof item === 'string'
        })
      } else {
        return false
      }
    }
  })
})
