# modularium

> *Warning!* modularium isn't stable, so few properties can be changed

| **ru_RU** | **en_US** | other |
| --- | --- | ---|
| [Russian](readme.md) | [Russian](docs/en_US/readme.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

ModulariumBot - discord.js bot, created with modules

### Primitive structure of a module
```js
module.exports = (plugin) => {
  plugin.commands.add({
    base: 'ping',
    execute(msg) {
      msg.channel.send('Pong')
    }
  })
}
```
___

# Contribution
```bash
$ git clone https://github.com/redcarti/modularium
$ cd modularium
$ npm i
```
___

# Use

| **ru_RU** | **en_US** | other |
| --- | --- | --- |
| [Russian](docs/ru_RU/use.md) | [English](docs/en_US/use.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

___

# Free hostings

| **ru_RU** | **en_US** | other |
| --- | --- | --- |
| [Russian](docs/ru_RU/freehost.md) | [English](docs/en_US/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |
