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
    this._design = design
  }

  use () {
    return this._design
  }
}

class Xdesigner {
  constructor () {
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

  async use (name, ...rest) {
    const design = this.find(name)
    if (design) {
      design().use(rest)
      return name
    } else {
      throw XDError({
        code: '404',
        name,
        rest
      })
    }
  }
}

module.exports = {
  XDError,
  Xdesign,
  Xdesigner
}
