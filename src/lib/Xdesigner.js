const { Collection } = require('discord.js')
const { EventEmitter } = require('events')

class XDError extends Error {
  constructor (message) {
    super(message)
    this.name = 'XDError'
    this.message = message
  }
}

class Xdesign {
  constructor (design) {
    return design
  }
}

class Xdesigner extends EventEmitter {
  constructor () {
    super()
    this._designs = new Collection()
  }

  add (name, design) {
    const Xdes = new Xdesign(design)
    this._designs.set(name, Xdes)
  }

  remove (name) {
    const design = this.find(name)
    this._designs.delete(design)
  }

  find (name) {
    const design = this._designs.find((_, key) => key === name)

    return design
  }

  use (name, ...rest) {
    const design = this.find(name)
    if (design) {
      this.emit('use', name)
      return design(rest)
    } else {
      this.emit('des/404', name)
    }
  }
}

module.exports = {
  XDError,
  Xdesign,
  Xdesigner
}
