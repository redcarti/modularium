# Использование

## `git clone`

Вы можете склонировать репозиторий и иметь доступ к внутренним объектам, но так как задумано по другому, лучше выбирать следующий вариант

## `npm install`

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
