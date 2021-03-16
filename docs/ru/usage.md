# Использование

## `git clone`

Вы можете склонировать репозиторий и иметь доступ к внутренним объектам, но лучше использовать [другой метод](#npm-install)

## `npm install`

- Сначала установите modularium, `npm install --save https://github.com/redcarti/modularium` *или* `npm install --save modularium`

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
    "lang": "ru",
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

# Бесплатный хостинг

Если ты не хочешь держать бота на своём компьютере или использовать платный хостинг, можно использовать бесплатные хостинги. Смотри тут: 

| **ru** | **en** | other |
| --- | --- | --- |
| [Russian](docs/ru/freehost.md) | [English](docs/en/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |
