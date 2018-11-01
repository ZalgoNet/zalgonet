require('./lib/zalgo')
zalgo.start(function (err) {
  if (err) throw err
  console.error('ZALGONET STARTED.')
})