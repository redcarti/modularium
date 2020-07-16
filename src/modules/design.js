const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')
const Discord = require('discord.js')

module.exports = (plugin, config) => {
  plugin._design = new Discord.Collection()

  plugin.designs = {
    add: (name, design) => {
      plugin._design.set(name, design)
    },
    use: (name, ...def) => {
      const des = plugin._design.get(name)
      if (des) return des(...def)
      plugin.warn('Дизайн \'' + name + '\' не найден. ' + '[MB#0003-DES]'.x240)
      return 'Дизайн не найден.'
    }
  }

  try {
    const dpath = path.join(process.cwd(), 'design')
    fsextra.mkdirpSync(dpath)
    let files = fs.readdirSync(dpath)
    files = files.filter((el) => { return el.split('.')[1] === 'js' })

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
