const Discord = require('discord.js')

module.exports = (info) => {
    console.log(info)
    let newemb = new Discord.MessageEmbed()
    newemb.setTitle(info[0])
    newemb.setDescription(info[1])
    return newemb
}