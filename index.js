'use strict';

var marker = Buffer('PK\x03\x04\x14\x00\x06\x00');

module.exports = function (buffer) {
  if (Buffer.isBuffer(buffer)) {
    return buffer.slice(0,8).equals(marker);
  }

  return false;
};
