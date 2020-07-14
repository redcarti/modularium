const Discord = require('discord.js')

module.exports = (msg) => {
    let newemb = new Discord.MessageEmbed()
    newemb.setTitle('Ошибка')
    newemb.setDescription('Команда выключена.')
    msg.channel.send(newemb) 
}