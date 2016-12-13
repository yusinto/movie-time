require('babel-register')({
  babelrc: false,
  presets: [
    "latest"
  ]
});
require("babel-polyfill");
require('./updateSchema');
