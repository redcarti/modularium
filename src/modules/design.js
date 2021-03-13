const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')
const { MessageEmbed } = require('discord.js')
const { Xdesigner, XDError } = require('../lib/Xdesigner')
const requireAll = require('require-all')

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

    const files = requireAll({
      dirname: designPath,
      filter: /^(?!;)(.+)\.js$/
    }); 

    Object.entries(files).forEach(([name, design]) => {
      if (typeof design === 'function') {
        plugin.designs.add(name, design)
      } else {
        if (config.features.mbErrors) plugin.designInfo(`[${'ERR'.x196}] ` + plugin.localeString('mb.0003', name) + '[MB#0003-DES]'.x240)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
