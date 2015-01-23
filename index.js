const assert  = require('assert')
const Promise = require('native-or-bluebird')

module.exports = map

// Apply a function to all values.
// @param {Mixed|Mixed[]} val
// @param {Mixed} ctx
// @return {Function}
function map(fn, ctx) {
  assert.equal(typeof fn, 'function')
  return function(val) {
    val = Array.isArray(val) ? val : [val]
    return Promise.resolve(val.map(fn, ctx))
  }
}
