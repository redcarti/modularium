# modularium

| **Russian** | **English** | other |
| --- | --- | ---|
| [*click*](../../readme.md) | [*click*](docs/en_US/readme.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

---

> *Warning!* modularium isn't stable, so few properties can be changed

ModulariumBot is a discord.js bot, created with modules

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
| [*click*](../ru_RU/usage.md) | [*click*](../en_US/usage.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

___

# Free hostings

| **Russian** | **English** | other |
| --- | --- | --- |
| [*click*](../ru_RU/freehost.md) | [*click*](../en_US/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |
