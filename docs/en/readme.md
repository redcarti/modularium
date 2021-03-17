# modularium

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

| **Russian** | **English** | other |
| --- | --- | ---|
| [*click*](docs/ru/readme.md) | [*click*](docs/en/readme.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

---

> *Warning!* modularium isn't stable, so few properties can be changed

ModulariumBot is a discord.js bot created with modules

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

# Usage

| **Russian** | **English** | other |
| --- | --- | --- |
| [*click*](../ru/usage.md) | [*click*](../en/usage.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

___

# Free hostings

| **Russian** | **English** | other |
| --- | --- | --- |
| [*click*](../ru/freehost.md) | [*click*](../en/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |