const fs = require('fs')
const fsextra = require('fs-extra')
const path = require('path')
const Discord = require('discord.js')
const { Xdesigner, XDError } = require('../lib/Xdesigner')
const requireAll = require('require-all')

module.exports = (plugin, config) => {
  plugin.designs = new Xdesigner()

  try {
    const dpath = path.join(process.cwd(), 'design')
    fsextra.mkdirpSync(dpath)

    const files = requireAll({
      dirname: dpath,
      filter: /^(?!;)(.+)\.js$/
    }); 

    Object.entries(files).forEach(([name, design]) => {
      if (typeof design === 'function') {
        plugin.designs.add(name, design)
      } else {
      }
    })
  } catch (err) {
    console.error(err)
  }
}
