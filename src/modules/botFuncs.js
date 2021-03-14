const mentionRegexp = /^<?(@([!&])|#)(\d+)>$/

module.exports = (pl, { user }) => {
  /**
   * Makes the bot type in channel 
   * @param {*} message message object 
   * @param {*} content function to execute when bot stops typing
   * @param {*} typing time of typing
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
    let mentionObj = {}

    if (mentionRegexp.test(mention)) {
      if (mentionRegexp.exec(mention)[2] === '!') 
        mentionObj.type = 'user'
      else if (mentionRegexp.exec(mention)[2] === '&') 
        mentionObj.type = 'role'
      else if (mentionRegexp.exec(mention)[1] === '#') 
        mentionObj.type = 'chat'
      
      mentionObj.id = mentionRegexp.exec(mention)[3]

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
    let resolved = pl.mentionResolve(mention, true)

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
    if (!emoji) return null
    return emoji
  }
}
