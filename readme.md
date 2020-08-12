# modularium

> *Внимание!* modularium ещё нестабилен, поэтому некоторые свойства могут меняться

| **ru_RU** | **en_US** | other |
| --- | --- | ---|
| [Russian](readme.md) | [English](docs/en_US/readme.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

ModulariumBot - бот discord.js, построенный на модулях

### Примитивное строение модуля
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

# Помощь в разработке
```bash
$ git clone https://github.com/redcarti/modularium
$ cd modularium
$ npm i
```
___

# Использование

| **ru_RU** | **en_US** | other |
| --- | --- | --- |
| [Russian](docs/ru_RU/use.md) | [English](docs/en_US/use.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

___

# Бесплатные хостинги

| **ru_RU** | **en_US** | other |
| --- | --- | --- |
| [Russian](docs/ru_RU/freehost.md) | [English](docs/en_US/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |
