const { Collection, Message } = require('discord.js')
const { EventEmitter } = require('events')


module.exports = class FoxDispatcher extends EventEmitter {
  /**
   * FoxDispatcher is commands dispatcher 
   * @extends EventEmitter
   * @class
   * @constructor
   * @public
   * @version 0.1.0
   * @since modularium/0.1.15.2
   */
  constructor() {
    super()
    this._commands = new Collection()
  }
  /**
   * Add a command to dispatcher
   * @param {{}} cmd Command object
   */
  add(cmd) {
    this._commands.set(cmd.base, cmd)
  }
  /**
   * Remove a command using it's base
   * @param {string} command Command base
   */
  remove(command) {
    let cmd = this.find(command)
    
    this._commands.delete(cmd)
  }
  /**
   * Find a command using it's base
   * @param {string} command Command base
   * @returns {{}} Command
   */
  find(command) {
    let cmd = this._commands.find(cmd => {
      if (cmd.aliases) return cmd.base === command || cmd.aliases.find(o => o === command)
      else return cmd.base === command
    })
    
    return cmd
  }
  /**
   * Use a command
   * @param {Message} msg Message
   * @param {string} command Command base
   * @param {Array} args Command's arguments
   */
  use(msg, command, args) {
    let cmd = this.find(command)
    if (cmd) if (!cmd.off) cmd.execute(msg, args); else this.emit('cmd/off', command)
    else this.emit('cmd/404', command)
  }
  /**
   * Parse & use a command
   * @param {Message} msg Message
   * @param {string} commandToParse Command to parse
   */
  parseuse(msg, commandToParse) {
    this.use(msg, ...this.parse(commandToParse))
  }
  /**
   * Parse a command
   * @param {string} commandToParse Command to parse
   * @returns {[command, args]} Command base, it's arguments
   */
  parse(commandToParse) {
    let args = commandToParse.split(/ +/)
    let command = args.shift().toLowerCase()
    return [command, args]
  }
  /**
   * Turn on/off a command, using it's base
   * @param {string} command Command base
   * @param {boolean} [userBool On/Off?
   */
  turn(command, userBool) {
    let cmd = this.find(command)
    
    cmd.off = !cmd.off || userBool
  }
  /**
   * Rebase old type command to new type
   * @param {{}} cmd Command object
   * @returns {{}} rebasedCmd
   */
  static rebase(cmd) {
    let rebasedCmd = {}
    
    Object.entries(cmd).forEach(([key, val]) => {
      if (key === 'name') rebasedCmd.base = val
      else if (key === 'description') rebasedCmd.info = val
      else rebasedCmd[key] = val
    })
    
    return rebasedCmd
  }
}