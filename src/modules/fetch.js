module.exports = (pl, cfg) => {
    pl.getGuild = (id, ...rest) => pl.bot.guilds.fetch(id, ...rest)

    pl.getChannel = (id, ...rest) => pl.bot.channels.fetch(id, ...rest)

    pl.getMember = (guild, id, ...rest) => guild.members.fetch(id, ...rest)

    pl.getEmoji = (guild, id, ...rest) => guild.emojis.fetch(id, ...rest)

    pl.getRole = (guild, id, ...rest) => guild.roles.fetch(id, ...rest)
}