zalgo.bindings = {}
require('fs').readdirSync(__dirname).forEach(function (file) {
  if (!file.match(/\.js$/)) return
  zalgo.bindings[file.replace(/\.js$/, '')] = require('./' + file)
})