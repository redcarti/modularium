# Гайд по построению лучшего бота

## Модули

Первый этап - **Создание модулей**.

Как вы уже знаете, модули выглядят так:
```js
module.exports = (plugin) => {
  // ...
}
```

На данном этапе вы создаёте что хотите, но не забывайте смотреть [документацию](docs/docs.md)

## Дизайны

Стандартные дизайны, которые вы должны сделать - `cmd404` и `cmdoff`

Пример `cmd404` / `cmdoff`:
```js
const Discord = require('discord.js')

module.exports = (info) => { // info - информация, передающаяся в дизайн.
    let newemb = new Discord.MessageEmbed() // Создаём Embed-объект
    newemb.setTitle(info[0]) // "Ошибка"
    newemb.setDescription(info[1]) // "Команда не найдена.", или при cmdoff - "Команда выключена."
    return newemb // возвращаем его, чтобы отправить
}
```

## Локализация

`modularium` имеет локализацию, поэтому, создайте папку `locale` и храните там языки.

Пример `ru_RU.json`:
```json
{
  "somestring": "Привет, %s!"
}
```

Пример использования в команде:
```js
module.exports = (plugin) => {
  plugin.commands.add({
    name: 'hello',
    aliases: ['hi', 'привет'],
    execute(msg) {
      msg.channel.send(plugin.localeString("somestring", '<@' + msg.author.id + '>'))
    }
  })
  // ...
}
```


## Конфиг

На данный момент, лучший конфиг:
```json
{
    "bot": {
        "token": "token",
        "prefix": "!",
        "generateLink": true
    },
    "lang": "ru_RU",
    "user": {
        "name": "ModulariumBot",
        "typing": 1500
    },
    "features": {
        "preventCmdNotFound": true,
        "mbErrors": true,
        "startupascii": true,
        "plugins": {
            "loadLocal": true,
            "log": true,
            "logSkipped": true
        },
        "updates": true
    },
    "roles": { }
}
```
