# Документация

Мини-документация по Modularium

___

# Модули

Модули составляются так:

```js
module.exports = (plugin, config) => {
    // ...
}
```

и хранятся в папке `modules`, вне зависимости, склонирован репозиторий или установлена библиотека.

#### `plugin`
Объект всего модуля, читайте [plugin](#plugin-1)

#### `config`
Конфигурация бота, читайте [config](#config-1)

# Дизайны

Дизайны это система почти готовых сообщений, которые вы используете для быстроты действий

Пример добавления и использования в модуле:

```js
module.exports = (plugin) => {
    plugin.designs.add('hello', (args) => { // Первый аргумент - название, второй - функция.
        return 'Привет, <@' + args[0] + '>'
    })

    plugin.commands.add({
        name: 'hello',
        description: 'Привет!',
        execute(msg) {
            msg.channel.send(plugin.desigs.use('hello', [msg.author.id]))
        }
    })
}
```

Также, дизайны имеют отдельную папку - `design`, в которой хранятся дизайны по файлам, пример:

```js
module.exports = (info) => {
    return 'Привет, <@' + info[0] + '>'
}
```

*Внимание!* Имя дизайна получается из названия файла.

___

# Объекты

## `plugin`

### `cmds`

Команды бота, представляющие объект.

Пример команды:
```js
module.exports = (plugin) => {
    plugin.commands.add({
        name: 'hello',
        description: 'Привет!',
        execute(msg) {
            msg.channel.send(plugin.desigs.use('hello', [msg.author.id]))
        }
    })
}
```

#### `add`

Добавить команду
`plugin.commands.add(cmd)`, [`cmd`](#cmd)


## `config`

Полный конфиг выглядит так:

```json
{
    "bot": {
        "token": "ваш_токен",
        "prefix": "!",
        "startupascii": true,
        "generateLink": true
    },
    "lang": "ru_RU",
    "user": {
        "name": "Modularium",
        "typing": 1500
    },
    "features": {
        "preventCmdNotFound": true
    }
}
```

### `bot`
Бот.

#### `bot.token`
Токен вашего бота

- [x] Обязательно

#### `bot.prefix`
Префикс вашего бота

- [x] Обязательно

#### `bot.startup`
Что будет писать бот на запуске

- [ ] Обязательно

#### `bot.generateLink`
Будет ли генерировать ссылку на приглашение

- [ ] Обязательно

### `lang`
Язык бота

- [x] Обязательно

### `user`
Пользователь бота

#### `user.name`
Имя вашего бота (если вы захотели его поменять)

- [ ] Обязательно

#### `user.typing`
Сколько бот будет имитировать написание

- [ ] Обязательно

### `features`
Разные штуки

#### `features.preventCmdNotFound`
Писать `Команда не найдена` или  нет

- [ ] Обязательно (если не будет или будет `false` то будет выключено)

___
# Объекты

## cmd
`cmd` состоит из:

| Название | Описание | Тип | Пример |
| --- | --- | --- | --- | 
| `name` | Название команды | `String` | `example` |
| `description` | Её описание | `String` | `Пример команды` |
| `aliases` | Алиасы команды | `Array<String>` | `['eg', 'ex']` |
| `execute(msg, args)` | Действие команды | `function` | `execute(msg, args) { msg.channel.send('Example') }`

### Пример
```js
{
    name: 'example',
    description: 'Пример команды',
    aliases: ['eg', 'ex'],
    execute(msg, args) {
        msg.channel.send('Example')
    }
}
```
___

# Ошибки/варнинги и т.д.

## Типы ошибок
### `EXT или IN`
Внешние или внутренные модули.

### `DES`
Дизайн.

## Ошибки
### [MB#0001]
`EXT или IN`

Модули должны быть одной функцией, пример:

```js
module.exports = (plugin) => {
    plugin.commands.add({
        // ...
    })
}
```

### [MB#0002]
`EXT или IN`

Модули, начинающиеся на `;` пропускаются.

### [MB#0003]
`DES`

Связанна ошибка с тем, что при указании `plugin.designs.use('design_name', ...)` не существует дизайн `design_name`.

Также, ошибка может вызываться потому что нет стандартных дизайнов, по типу `cmd404` (Команда не найдена.) или `cmdoff` (Команда выключена.)

