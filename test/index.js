
/* global describe it beforeEach */

/*
 * Module dependencies.
 */

var should = require('should')

/*
 * Tests.
 */

describe('node-env-set', function () {
  beforeEach(function () {
    delete process.env.NODE_ENV
  })

  it('should not terminate', function () {
    process.env.NODE_ENV = 'development'
    require('../lib')
  })

  it('should terminate', function () {
    delete require.cache[require.resolve('../lib')]
    require('../lib')
    should.fail('The app did not terminate.')
  })
})
