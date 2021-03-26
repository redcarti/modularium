# modularium

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A `discord.js` bot created with modules

# Why do you need to use it?

`modularium` helps you to create `discord.js` bots faster using modules

An example of a module:

```javascript
module.exports = (plugin, config) => {
    // Just a simple command to test modularium!
    plugin.commands.add({
        base: 'test',
        description: 'A test command!',
        execute(msg, args) {
            msg.channel.send('You have executed test command ' + (args ? 'with arguments: ' + args : 'without any arguments :('))
        }
    })

    // To use other features of discord.js bot read documentation of it.
    plugin.bot.on('message', (msg) => {
        plugin.info('Hey! I have got recieved new message!\n' + msg.content)
    })
}
```

# Installing
```console
$ npm install modularium
```

```javascript
const modularium = require('modularium')

// Just a simple config to run it
modularium.run({
    bot: {
        token: 'your_discord_bot_token',
        prefix: '!'
    },
    lang: 'en_US'
})
```

# Badge

[![Using modularium](https://img.shields.io/badge/using-modularium-red)](https://github.com/modularium/modularium)

```markdown
[![Using modularium](https://img.shields.io/badge/using-modularium-red)](https://github.com/modularium/modularium)
```

# Contributing 
We are welcome to the new features from you!

To start contributing to the project clone this repo:
```console
$ git clone https://github.com/modularium/modularium
$ cd modularium
```

# License
`modularium` is licensed under [MIT License](https://mit-license.org/)