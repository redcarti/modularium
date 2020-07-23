const fs = require('fs')
const path = require('path')
const moment = require('moment')
const requireAll = require('require-all')
const { FoxDispatcher } = require('./lib/Fox')
const { RopePlugin } = require('./lib/Rope')
const { Collection } = require('discord.js')
require('colors-cli/toxic')

module.exports = (bot, config) => {
  const plugin = new RopePlugin()

  plugin.list = {
    internal: new Collection(),
    external: new Collection()
  }
  plugin.bot = bot

  plugin.commands = new FoxDispatcher()

  plugin.log = (message, prefix) => {
    message = '[' + moment().format('HH:mm:ss') + (prefix ? ' | ' + prefix : '') + ']: ' + message
    console.log(message)
  }
  plugin.info = (message) => {
    plugin.log(message, 'INFO'.x2)
  }
  plugin.err = (message) => {
    plugin.log(message, 'ERR'.x196)
  }
  plugin.warn = (message) => {
    plugin.log(message, 'WARN'.x220)
  }
  plugin.plinfo = (message) => {
    plugin.log(message, 'PLUGINS'.x38)
  }
  plugin.upinfo = (message) => {
    plugin.log(message, 'UPDATE'.x41)
  }
  plugin.fox = (message) => {
    plugin.log(message, 'FOX'.x208)
  }

  try {
    const files = requireAll({
      dirname: `${__dirname}/modules`,
      filter: /^(?!;)(.+)\.js$/
    });   

    Object.entries(files).forEach(([name, pl]) => {
      if (typeof pl === 'function' || typeof pl.plugin === 'function') {
        pl.plugin ? pl.plugin(plugin, config) : pl(plugin, config)
        plugin.list.internal.set(name, pl || pl.plugin)
      } else {
        if (config.features.mbErrors) plugin.plinfo('Ошибка, внутренний плагин \'' + name + '\' не функция. [MB#0001-IN]')
      }
    })
  } catch (err) {
    console.error(err)
  }

  return plugin
}
