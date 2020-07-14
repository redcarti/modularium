const fs = require('fs')
const path = require('path')
const moment = require('moment')
require('colors-cli/toxic')

const plugin = {}

module.exports = (bot, config) => {
  plugin.list = {
    internal: [],
    external: []
  }
  plugin.bot = bot

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
  plugin.plinfo = (message) => {
    plugin.log(message, 'PLUGINS'.x38)
  }

  try {
    let files = fs.readdirSync(path.join(__dirname, './modules/'))

    files = files.filter((el) => {
      return el.split('.')[1] === 'js'
    })

    files.forEach(module => {
      const pl = require(path.join(__dirname, './modules/' + module))
      if (typeof pl === 'function') {
        pl(plugin, config)
        plugin.list.internal.push(module.split('.')[0])
      } else {
        if (config.features.mbErrors) plugin.plinfo('Ошибка, внутренний плагин \'' + module.split('.')[0] + '\' не может быть загружен. [MB#0001-IN]')
      }
    })
  } catch (err) {
    console.error(err)
  }

  return plugin
}
