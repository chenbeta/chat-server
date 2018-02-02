require('babel-core/register')({
  presets: ['es2015', 'stage-0']
});
require('babel-polyfill');
process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H')
var app = require('./server/index');
