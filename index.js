'use strict'

var Component = require('./lib/Component')
var S2XComponent = require('./lib/S2XComponent')
var core = require('node-xmpp-core')

module.exports = Component
module.exports.Component = Component
module.exports.X2SComponent = Component
module.exports.S2XComponent = S2XComponent

core.exportCoreUtils(module.exports)
