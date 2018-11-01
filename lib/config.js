try {
  zalgo.conf = require('../conf-defaults')
}
catch (e) {
  zalgo.conf = {}
  console.error(e)
}
