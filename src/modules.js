const fs = require('fs')
const path = require('path')
const Discord = require('discord.js');
const moment = require('moment')
require('colors-cli/toxic')

let plugin = {}

module.exports = (bot, config) => {
    plugin.list = {
        internal: [],
        external: []
    };
    plugin.bot = bot

    plugin.log = (message, prefix) => {
        message = '['+moment().format('MMMM Do YYYY, HH:mm:ss') + (prefix ? ' ' + prefix : '') + ']: ' + message
        console.log(message)
    }
    plugin.info = (message) => {
        plugin.log(message, 'INFO'.x2)
    }
    plugin.plinfo = (message) => {
        plugin.log(message, 'PLUGINS'.x38)
    }

    try {
        let files = fs.readdirSync(path.join(__dirname, './modules/'))

        files.forEach(module => {
            let pl = require(path.join(__dirname, './modules/'+module))
            if(typeof pl === 'function') {
                pl(plugin, config)
                plugin.list.internal.push(module.split('.')[0])
            } else {
                console.log('[PLUGINS]: Ошибка, внутренний плагин \'' + module.split('.')[0] + '\' не может быть загружен. [MB#0001-IN]')
            }
        })
    } catch (err) {
        throw new Error(err)
    }
}