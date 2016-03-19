'use strict';

var ooxmlType = require('ooxml-type');

module.exports = function (buffer) {
  return ooxmlType(buffer) === 'docx';
};
