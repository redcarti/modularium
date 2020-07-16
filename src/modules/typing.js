module.exports = (pl, { user }) => {
  pl.bot.typing = (message, content, typing = user.typing) => {
    message.channel.startTyping()
    setTimeout(() => {
      setTimeout(() => { content() }, 0)

      message.channel.stopTyping()
    }, typing || 0)
    message.channel.stopTyping()
  }
}
