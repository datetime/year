/**
 * year <https://github.com/jonschlinkert/year>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

const replace = require('frep');

module.exports = function(str) {
  str = str || 'YYYY';

  var year = new Date().getUTCFullYear();
  var replacements = [
    {
      pattern: /[Yy]{4}/,
      replacement: String(year)
    },
    {
      pattern: /[Yy]{2}/,
      replacement: String(year).substr(2, 2)
    }
  ];
  return replace.strWithArr(str, replacements);
};