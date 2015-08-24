
/*
 * node-env-set
 */

function nodeEnvSet () {
  var env = process.env.NODE_ENV

  if (env === 'undefined' || env === undefined) {
    console.error('NODE_ENV must be set.')
    process.exit(1)
  }
}

nodeEnvSet()
