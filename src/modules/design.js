const fsextra = require('fs-extra')
const path = require('path')
const { MessageEmbed } = require('discord.js')
const { Xdesigner } = require('../lib/Xdesigner')
const recRequire = require('../lib/recrequire')

module.exports = (plugin, config) => {
  plugin.designs = new Xdesigner()

  plugin.designs.add('simpleEmbed', ([title, description]) => {
    return new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
  })

  try {
    const designPath = path.join(process.cwd(), 'design')
    fsextra.mkdirpSync(designPath)

    const files = recRequire(designPath, /^(?!;)(.+)\.js$/)

    Object.entries(files).forEach(([name, design]) => {
      if (typeof design === 'function')
        plugin.designs.add(name, design)
      else {
        if (config.features.mbErrors)
          plugin.designInfo(`[${'ERR'.x196}] ` + plugin.localeString('mb.0003', name) + '[MB#0003-DES]'.x240)
      }
    })
  } catch (err) {
    plugin.err('Catched error\n' + err.name + ': ' + err.message + '\n' + err.stack)
  }
}
