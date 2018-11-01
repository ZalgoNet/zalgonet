zalgo.commands = {}
require('fs').readdirSync(__dirname).forEach(function (file) {
  if (!file.match(/\.js$/)) return
  zalgo.commands[file.replace(/\.js$/, '')] = require('./' + file)
})