# modularium

| **ru_RU** | **en_US** | other |
| --- | --- | ---|
| [Russian](https://github.com/redcarti/modularium/blob/master/readme.md) | soon... | [submit PR!](https://github.com/redcarti/modularium/pulls) |

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
# Разработка
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
| [Russian](docs/ru_RU/freehost.md) | [English](docs/en_US/freehost.md) | submit PR! |
