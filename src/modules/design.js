const fs = require('fs')
const path = require('path')
const Discord = require('discord.js')

module.exports = (plugin, config) => {
  plugin._design = new Discord.Collection()

  plugin.designs = {
    add: (name, design) => {
      plugin._design.set(name, design)
    },
    get: (name) => {
      const des = plugin._design.get(name)
      return des
    }
  }

  try {
    const dpath = path.join(process.cwd(), 'design')
    const files = fs.readdirSync(dpath)

    files.forEach(f => {
      const des = require(path.join(dpath, f))
      if (typeof des === 'function') {
        plugin.designs.add(f.split('.')[0], des)
      } else {}
    })
  } catch (err) {
    console.error(err)
  }
}
