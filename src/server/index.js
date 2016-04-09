require('babel-register')({
  presets: [
    {
      // only include this at runtime because updateSchema.js must not reference this
      plugins: [
        "./babelRelayPlugin"
      ]
    }]
});
require('./server');