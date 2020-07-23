module.exports = (pl, { user }) => {
  pl.bot.typing = (message, content, typing = user.typing) => {
    message.channel.startTyping()
    setTimeout(() => {
      setTimeout(() => { content() }, 0)

      message.channel.stopTyping()
    }, typing || 0)
    message.channel.stopTyping()
  }
  /**
   * Resolve a mention
   * @param {string} mention 
   * @param {boolean]} obj 
   * @returns {object|string|undefined}
   */
  pl.mentionResolve = (mention, obj = true) => {
    let regexp = /^<?(@([!&])|#)(\d+)>$/
    let mentionObj = {}
    if (regexp.test(mention)) {
      if (regexp.exec(mention)[2] === '!') mentionObj.type = 'user'
      else if (regexp.exec(mention)[2] === '&') mentionObj.type = 'role'
      else if (regexp.exec(mention)[1] === '#') mentionObj.type = 'chat'
      mentionObj.id = regexp.exec(mention)[3]
      return obj ? mentionObj : mentionObj.id
    } 
    return undefined
  }

  pl.mentionResolveObj = (mention) => {
    let resolved = pl.mentionResolve(mention)

    if (resolved.type === 'user') return pl.bot.users.cache.get(resolved.id)
    else if (resolved.type === 'chat') return pl.bot.channels.cache.get(resolved.id)

    else return undefined
  }

  pl.findEmoji = (id) => {
    const emoji = pl.bot.emojis.cache.get(id)
    if (!emoji) return null
    return emoji
  }
  
}
