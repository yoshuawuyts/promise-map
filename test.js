const test    = require('tape')
const map     = require('./')
const Promise = require('any-promise')

test('promise-map should assert input types', function(t) {
  t.plan(1)
  t.throws(map.bind(null, 123))
})

test('promise-map should map a fn', function(t) {
  t.plan(1)
  const res = Promise.resolve([1, 2, 3])
    .then(map(mapFn))
    .then(checkFn)
    .catch(handleErr)

  function mapFn(val) {
    return val + 1
  }

  function checkFn(val) {
    t.deepEqual([2, 3, 4], val)
  }

  function handleErr() {
    t.fail('catch')
  }
})

test('promise-map should map a fn that returns promises', function(t) {
  t.plan(1)
  const res = Promise.resolve([2, 3, 4])
    .then(map(mapFn))
    .then(checkFn)

  function mapFn(val) {
    return Promise.resolve(val + 1);
  }

  function checkFn(val) {
    t.deepEqual([3, 4, 5], val)
  }
})
