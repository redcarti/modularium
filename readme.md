# modularium

| **RU** [Russian](https://github.com/redcarti/modularium/blob/master/readme.md) | **US** English | other |
| --- | --- | ---|
| *russian* | soon... | [PR your translation!](https://github.com/redcarti/modularium/pulls) |

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
```
$ git clone https://github.com/redcarti/modularium
$ cd modularium
$ npm i
```
___

# Использование

## git clone

Вы можете склонировать репозиторий и иметь доступ к внутренним объектам, но так как задумано по другому, лучше выбирать следующий вариант

## npm install

- Сначала установите modularium, `npm install --save https://github.com/redcarti/modularium`

- Потом, создайте `index.js` с таким кодом:

```js
require('modularium').run(require('./config.json'))
```

- Далее, создайте `config.json` с содержанием (простой пример, смотрите больше в документации):
```json
{
    "bot": {
        "token": "ваш_token",
        "prefix": "!",
        "generateLink": true
    },
    "lang": "ru_RU",
    "user": {
        "typing": 1000
    },
    "features": {
        "preventCmdNotFound": true,
        "updates": true
    }
}
```

- Можно запускать, написав в консоль `node index`.

___

# Бесплатные хостинги

> Рассматриваются [repl.it](https://repl.it), почему нет glitch: [здесь](#glitchcom)

## repl.it

На `repl.it` вы делаете все тоже самое что и в [npm install](#npm-install), но:

- Вы создаёте файл `.env` в котором создаёте переменную, к примеру `TOKEN`:

```
TOKEN=ваш_токен
```

- Далее, изменяете `index.js`:

```js
let config = require('./config.json')
config.token = process.env.TOKEN // либо как вы назвали переменную с токеном
require('modularium').run(config)
```

- Чтобы бот не отключался, посмотрите [keepAlive.js](examples/keepAlive.js)

- - *Внимание!* Бот может отключиться, хоть и стоит тайминг в 10 секунд! Экспериментируйте со значением времени.

- - - > UPD: Если честно, то я не знаю когда он может отключиться. Но! У меня бот работал 2 дня без сбоев.

- - Чтобы проверять, не отключился ли бот и пинговать его, зарегистрируйтесь на [UptimeRobot](https://uptimerobot.com)

## glitch.com

`Glitch` - хоть и бесплатный, но не такой хороший хостинг.

| Плюсы | Минусы |
| --- | --- |
| Приватность | `UptimeRobot` и подобные сервисы заблокированы навсегда |
| | `keepAlive.js` не работает (по крайней мере пока я тестировал) |
| | Чтобы бот был активным, нужно всегда подавать запросы или держать открытой вкладку |

## Заключение

Проще создать бота на `repl.it` и проверять его в `UptimeRobot`.
