# Использование

## `git clone`

Вы можете склонировать репозиторий и иметь доступ к внутренним объектам, но лучше использовать [устанавливать его](#npm-install)

Если вы всё-таки склонировали репозиторий, напишите в консоль:
```shell
$ npm install
$ node index
```

## `npm install`

- Сначала установите `modularium` с помощью команды `npm install modularium`

- Потом, создайте `index.js` с таким кодом:

```javascript
let modularium = require('modularium')

// modularium.run() требует конфигурацию, пример:
modularium.run({
    bot: {
        token: 'ваш_token', // токен самого бота, без которого modularium не запустится
        prefix: '!', // префикс для выполнения команд, стандартный - !
        generateLink: true // сгенерировать ссылку для приглашения бота
    },
    lang: 'ru_RU', // язык бота
    // настройки "пользователя"
    user: {
        typing: 1000 // время "набора" сообщения в миллисекундах
    },
    // разные возможности, которые имеет бот.
    features: {
        preventCmdNotFound: true, // предотвращать то, что команда не найдена.
        updates: true // проверка на обновления
    }
})
```

- Можно запускать, написав в консоль `node index`.

# Бесплатный хостинг

Если ты не хочешь держать бота на своём компьютере или использовать платный хостинг, можно использовать бесплатные хостинги. Смотри тут: 

| **ru** | **en** | other |
| --- | --- | --- |
| [Russian](docs/ru/freehost.md) | [English](docs/en/freehost.md) | [submit PR!](https://github.com/modularium/modularium/pulls) |
