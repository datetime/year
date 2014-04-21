/**
 * year <https://github.com/jonschlinkert/year>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

const replace = require('frep');

module.exports = function(str) {
  var year = new Date().getFullYear();
  var replacements = [
    {
      pattern: /[Yy]{4}/,
      replacement: year
    },
    {
      pattern: /[Yy]{2}/,
      replacement: year.toString().substr(2, 2)
    }
  ]
  return replace.strWithArr(str, replacements);
};