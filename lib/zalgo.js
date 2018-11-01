// EXPORTS
global.zalgo = Object.create(null)

// DEPS
zalgo.async = require('async')
zalgo.ccxt = require('ccxt')

// LIBS
require('./config')
require('./db')
require('./parser')
require('./repl')
require('./bindings')

// GLOBAL METHODS
zalgo.start = function (cb) {
  zalgo.async.series([
    zalgo.db.connect,
    zalgo.bindings.telnet.start
  ], function (err) {
    if (cb) return cb(err)
    else if (err) throw err
  })
}