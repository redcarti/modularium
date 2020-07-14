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
            let des = plugin._design.get(name)
            return des
        }
    }

    try {
        let dpath = path.join(process.cwd(), 'design')
        let files = fs.readdirSync(dpath)
    
        files.forEach(f => {
            let des = require(path.join(dpath, f))
            if (typeof des === 'function') {
                plugin.designs.add(f.split('.')[0], des)
            } else return
        })
    } catch (err) {
        console.error(err)
    }
}