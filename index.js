'use strict';

var exec = require('child_process').exec;

module.exports = function (cmd) {
  exec(cmd, function (err, stdout, stderr) {
    if (err !== null) {
      if (stdout.length > 0) {
        console.log(stdout.trim());
      }
      if (stderr.length > 0) {
        console.log(stderr.trim());
      }
    }
  });
};
