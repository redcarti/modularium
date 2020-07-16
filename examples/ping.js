/*
    Use it if you wanna get bot's ping
    --- 
    Используйте, если хотите узнать пинг бота
*/

module.exports = (plugin) => {
    plugin.commands.add({
        name: 'ping',
        execute(message, args) {
            message.channel.send("Ping: " + (Date.now() - message.createdTimestamp) + 'ms')
        },
    })
}