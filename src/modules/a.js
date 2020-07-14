const rdl = require('readline')
const ver = require('../../package.json').version

module.exports = (plugin, config) => {
  process.stdout.write('\x1B[?25l')
  var lines = process.stdout.getWindowSize()[1]
  for (var i = 0; i < lines; i++) {
    console.log('\r\n')
  }
  const spinners = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  let index = 0

  const spinner = setInterval(() => {
    let line = spinners[index]
    if (index + 1 > spinners.length) index = 0; line = spinners[index]
    process.stdout.write(line.x1 + '  ' + plugin.localeString('spinner.wait'))
    rdl.cursorTo(process.stdout, 0)

    index = index >= spinners.length ? 0 : index + 1
  }, 100)

  plugin.bot.on('ready', () => {
    clearInterval(spinner)
    if (config.bot.generateLink === true) {
      plugin.bot.generateInvite(['ADMINISTRATOR']).then(link => {
        plugin.info(plugin.localeString('invitelink', link))
      })
    }
    plugin.bot.user.setUsername(config.user.name || 'ModulariumBot')
  })

  var f1 = '  ,__ __                      _                                   , __          '.x1.xb16
  var f2 = ' /|  |  |          |         | |             o                   /|/  \\         '.x1.xb16
  var f3 = '  |  |  |   __   __|         | |  __,   ,_              _  _  _   | __/ __ _|_  '.x1.xb16
  var f4 = '  |  |  |  /  \\_/  |  |   |  |/  /  |  /  |  |  |   |  / |/ |/ |  |   \\/  \\_|   '.x1.xb16
  var f5 = '  |  |  |_/\\__/ \\_/|_/ \\_/|_/|__/\\_/|_/   |_/|_/ \\_/|_/  |  |  |_/|(__/\\__/ |_/ '.x1.xb16
  var f6 = '                                                                                '.x1.xb16
  var f7 = `  v${ver}  `.x1.xb16
  var all = `\n  ${f1}\n  ${f2}\n  ${f3}\n  ${f4}\n  ${f5}\n  ${f6}\n  ${f7}\n`
  if (config.features.startupascii) console.log(all)
}
