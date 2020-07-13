const fs = require('fs')
const path = require('path')

module.exports = (plugin, config) => {
    try {
        let files = fs.readdirSync(path.join(__dirname, '../../modules/'))

        files = files.filter((el) => {
            return el.split('.')[1] === 'js'
        })

        files.forEach(module => {
            if(module.startsWith(';')) {
                plugin.plinfo('\''+module.split('.')[0].slice(1) + '\' пропущен. ' + '[MB#0003-EXT]'.x240); 
                return;
            }
            let pl = require(path.join(__dirname, '../../modules/'+module))

            if(typeof pl === 'function') {
                pl(plugin, config)
                plugin.list.external.push(module.split('.')[0])
                plugin.plinfo('\''+module.split('.')[0] + '\' загружен.')
            } else {
                plugin.plinfo(`[${'ERR'.x196}] ` + 'Ошибка, плагин \'' + module.split('.')[0] + '\' не может быть загружен. '+'[MB#0001-EXT]'.x240)
            }
        })
    } catch (err) {
        console.error(err)
    }
}