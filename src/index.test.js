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
