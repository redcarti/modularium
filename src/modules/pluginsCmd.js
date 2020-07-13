const Discord = require('discord.js')

module.exports = (plugin, {}) => {
    plugin.cmds.add({
        name: 'plugins',
        description: 'Вывод всех плагинов',
        execute(message) {
            let newmsg = new Discord.MessageEmbed()
            newmsg.setColor('#1a61b3')
            newmsg.setTitle(plugin.localeString('pluginsCmd.total', plugin.list.internal.length+plugin.list.external.length))
            newmsg.addField(plugin.localeString('pluginsCmd.internal', plugin.list.internal.length), plugin.list.internal.join(', '))
            newmsg.addField(plugin.localeString('pluginsCmd.external', plugin.list.external.length), plugin.list.external.join(', '))
            newmsg.setFooter('std;')
            message.channel.send(newmsg)
        }
    })
}