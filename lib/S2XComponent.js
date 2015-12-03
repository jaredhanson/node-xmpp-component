'use strict'

var util = require('util')
var Component = require('./Component')

// http://xmpp.org/extensions/xep-0114.html
// http://xmpp.org/extensions/attic/jep-0114-1.4.html
// http://xmpp.org/extensions/attic/jep-0114-1.3.html
// https://tools.ietf.org/html/draft-miller-jabber-00#section-5.2
// https://tools.ietf.org/html/draft-miller-jabber-00#section-8.3
// https://tools.ietf.org/html/draft-miller-jabber-00#section-8.3.2

/**
 * opts:
 *   jid: String (required)
 *   password: String (required)
 *   host: String (required)
 *   port: Number (required)
 *   reconnect: Boolean (optional)
 */
function S2XComponent (opts) {
  Component.call(this, opts)
}

util.inherits(S2XComponent, Component)

S2XComponent.prototype.NS_COMPONENT = 'jabber:component:connect'

module.exports = S2XComponent
