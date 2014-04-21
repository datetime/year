/**
 * year <https://github.com/jonschlinkert/year>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

const expect = require('chai').expect;
const year = require('../');


describe('year()', function () {
  describe('when YY passed', function () {
    it('should return the 2-digit current year', function (done) {
      var actual = year('YY');
      expect(actual).to.equal('14');
      done();
    });
  });

  describe('when yy passed', function () {
    it('should return the 2-digit current year', function (done) {
      var actual = year('yy');
      expect(actual).to.equal('14');
      done();
    });
  });

  describe('when YYYY passed', function () {
    it('should return the 4-digit current year', function (done) {
      var actual = year('YYYY');
      expect(actual).to.equal('2014');
      done();
    });
  });

  describe('when yyyy passed', function () {
    it('should return the 4-digit current year', function (done) {
      var actual = year('yyyy');
      expect(actual).to.equal('2014');
      done();
    });
  });
});