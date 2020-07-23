const { Collection } = require('discord.js')
const { EventEmitter } = require('events')

class XDError extends Error {
  constructor(message) {
      super(message)
      this.name = 'XDError'
      this.message = message
  }
}

class Xdesign {
    constructor(design) {
        return design
    }
}

class Xdesigner extends EventEmitter {
    constructor() {
        super()
        this._designs = new Collection()
    }

    add(name, design) {
        let Xdes = new Xdesign(design)
        this._designs.set(name, Xdes)
    }

    remove(name) {
        let design = this.find(name)
        this._designs.delete(design)
    }

    find(name) {
        let design = this._designs.find((val, key) => {return key === name})

        return design
    }

    use(name, ...rest) {
        let design = this.find(name)
        if (design) { this.emit('use', name); return design(rest); }
        else this.emit('des/404', name)
    }
}

module.exports = {
    XDError,
    Xdesign,
    Xdesigner
}