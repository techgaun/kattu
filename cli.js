#!/usr/bin/env node
'use strict';
var meow = require('meow');
var kattu = require('./');

var cli = meow([
  'Usage',
  '  $ kattu [cmd]',
  '',
  'Examples',
  '  $ kattu ls /tmp',
  '',
  '  $ kattu ls /tmp/does/not/exist',
  '  ls: cannot access /tmp/does/not/exist: No such file or directory'
]);

(process.argv.slice(2).length > 0) ? kattu(process.argv.slice(2).join(' ')) : console.log('Missing command argument');
