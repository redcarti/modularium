const Discord = require('discord.js'); 
const bot = new Discord.Client();
const ms = require('./modules')

module.exports.login = (cfg) => { 
    bot.login(cfg.bot.token); 
    ms(bot, cfg);
}