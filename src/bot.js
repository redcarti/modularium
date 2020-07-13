const Discord = require('discord.js'); 
const bot = new Discord.Client();
const ms = require('./modules')
let config = {}

bot.on('ready', () => { 
    // console.log(`Запустился бот ${bot.user.username}`);

    bot.user.setUsername(config.user.name || 'ModulariumBot');
    //bot.user.setActivity(config.user.activity.name, config.user.activity.options)
    //.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    //.catch(console.error);

    ms(bot, config);
});
bot.on('message', msg => {
    if (!msg.content.startsWith(config.bot.prefix) || msg.author.bot) return;
	const args = msg.content.slice(config.bot.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(bot.commands.has(command)) {
        let cmd = bot.commands.get(command)
        cmd.execute(msg, args)
    } else {
        if(config.features.preventCmdNotFound) msg.channel.send('Команда не найдена.') 
    }
});




















module.exports.login = (cfg) => { 
    bot.login(cfg.bot.token); 
    config = cfg 
}