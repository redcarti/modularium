const mentionRegexp = /^<?(@([!&])|#)(\d+)>$/

/**
 * Module that includes some bot functions as typing, resolving a mention, etc.
 */
module.exports = (pl, { user }) => {
  /**
   * Makes the bot type in channel
   * @param {Message} message message object
   * @param {Function} content function to execute when bot stops typing
   * @param {Number} typing time of typing
   */
  pl.bot.typing = (message, content, typing = user.typing) => {
    message.channel.startTyping()
    setTimeout(() => {
      setTimeout(() => { content() }, 0)

      message.channel.stopTyping()
    }, typing || 0)
    message.channel.stopTyping()
  }

  /**
   * Resolves a mention
   * @param {string} mention
   * @param {boolean]} obj
   * @returns {object|string|undefined}
   */
  pl.mentionResolve = (mention, obj = true) => {
    const mentionObj = {}

    if (mentionRegexp.test(mention)) {
      const executedMention = mentionRegexp.exec(mention)

      if (executedMention[2] === '!') {
        mentionObj.type = 'user'
      } else if (executedMention[2] === '&') {
        mentionObj.type = 'role'
      } else if (executedMention[1] === '#') {
        mentionObj.type = 'chat'
      }

      mentionObj.id = executedMention[3]

      return obj ? mentionObj : mentionObj.id
    }

    return undefined
  }

  /**
   * Resolves a mention and return User or Channel object
   * @param {string} mention
   * @returns {object|undefined}
   */
  pl.mentionResolveObj = (mention) => {
    const resolved = pl.mentionResolve(mention, true)

    switch (resolved.type) {
      case 'user':
        return pl.bot.users.cache.get(resolved.id)
      case 'chat':
        return pl.bot.channels.cache.get(resolved.id)
      default:
        return undefined
    }
  }

  /**
   * Finds an emoji by its id
   * @param {string} id
   * @returns {object|undefined}
   */
  pl.findEmoji = (id) => {
    const emoji = pl.bot.emojis.cache.get(id)
    if (!emoji) { return null }
    return emoji
  }

  pl.userWithDescriminator = (user) => {
    return `${user.username}#${user.descriminator}`
  }
}
