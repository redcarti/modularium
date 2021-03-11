# modularium

| **Russian** | **English** | other |
| --- | --- | ---|
| [*click*](readme.md) | [*click*](docs/en_US/readme.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

> *Внимание!* modularium ещё нестабилен, поэтому некоторые свойства могут меняться

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

| **Russian** | **English** | other |
| --- | --- | --- |
| [*click*](docs/ru_RU/usage.md) | [*click*](docs/en_US/usage.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |

___

# Бесплатные хостинги

| **Russian** | **English** | other |
| --- | --- | --- |
| [*click*](docs/ru_RU/freehost.md) | [*click*](docs/en_US/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |
