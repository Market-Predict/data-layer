
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./data-layer.cjs.production.min.js')
} else {
  module.exports = require('./data-layer.cjs.development.js')
}
