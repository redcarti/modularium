# modularium

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`discord.js` бот, сделанный из модулей

# Почему я должен использовать modularium?

`modularium` помогает создавать `discord.js` ботов с помощью модулей

Пример модуля:

```javascript
module.exports = (plugin, config) => {
    // Простая команда чтобы протестировать modularium
    plugin.commands.add({
        base: 'test',
        description: 'Это тестовая команда!',
        execute(msg, args) {
            msg.channel.send('Ты выполнил тестовую команду' + (args ? 'с аргументами: ' + args : 'без аргументов :('))
        }
    })

    // Чтобы использовать остальные возможности discord.js, прочитайте его документацию.
    plugin.bot.on('message', (msg) => {
        plugin.info('Я получил сообщение!\n' + msg.content)
    })
}
```

# Installing
```console
$ npm install modularium
```

```javascript
const modularium = require('modularium')

// Простой конфиг, позволяющий запустить бота
modularium.run({
    bot: {
        token: 'токен_discord_бота',
        prefix: '!'
    },
    lang: 'ru_RU'
})
```

# Значок

[![Using modularium](https://img.shields.io/badge/using-modularium-red)](https://github.com/modularium/modularium)

```markdown
[![Using modularium](https://img.shields.io/badge/using-modularium-red)](https://github.com/modularium/modularium)
```

# Участие в создании 
Мы приветствуем создание новых фич в боте!

Чтобы принять участие в создании, склонируйте репозиторий:
```console
$ git clone https://github.com/modularium/modularium
$ cd modularium
```

# Лицензия
`modularium` лицензирован [лицензией MIT](https://mit-license.org/)