# API

## Объекты

### `plugin`
#### Свойства

| Название | Описание | Тип |
| --- | --- | --- |
| [`commands`](#plugincommands) | Команды | `Object` |
| [`_commandListeners`](#plugin_commandListeners) | Листенеры команд | [`Discord.Collection`](https://discord.js.org/#/docs/collection/master/class/Collection) |
| `random01()` | Рандомное число от 0 до 1 | `function()` |
| `randomInt(min, max)` | Возвращает случайное целое число от `min` до `max` | `function()` |
| `randomFloat(min, max)` | Возвращает случайное число с плавающей запятой от `min` до `max` (15 знаков за запятой) | `function()` |
| `randomInRange(min, max)` | Работает примерно также, как и `randomInt()` // в чём отличие?? | `function()` |
| [`designs`](#plugindesigns) | Дизайны | `Object` |
| `bot` | Бот | [`Discord.Client`](https://discord.js.org/#/docs/main/stable/class/Client) |
| `locale` | Файл локализации, зависимый от языка бота | `Object` |
| `localeString` | Функция локализации | `function()` |
| `log` | Логирование | `function()` |
| `info` | Логирование с префиксом информации | `function()` |
| `err` | Логирование с префиксом ошибки | `function()` |
| `warn` | Логирование с префиксом предупреждения | `function()` |
| `pluginInfo` | Логирование для информации плагинов | `function()` |
| `designInfo` | Логирование для информации дизайнов | `function()` |
| `foxInfo` | Логирование [Fox](https://github.com/modularium/fox) | `function()` |

#### Пример
```js
module.exports = (plugin) => {
    // код плагина
    plugin.commands.add({
        base: 'example',
        execute(msg, args) {
            msg.channel.send('Example command')
        }
    })
}
```

* * *

### `plugin.commands`
#### Свойства

| Название | Описание | Тип |
| --- | --- | --- |
| `add(command)` | Добавить [`FoxCommand`](#FoxCommand) | `function()` |
| `remove(command)` | Удалить [`FoxCommand`](#FoxCommand) | `function()` |
| `turn(command.base)` | Вкл/выкл. [`FoxCommand`](#FoxCommand) | `function()` |
| `use(msg, command.base, args)` | Использовать [`FoxCommand`](#FoxCommand) | `function()` |

* * *

### `plugin._commandListeners`
Представляет собой коллекцию листенеров для обработки команд, которые вы можете заменять
Документация по `Discord.Collection` [находится здесь](https://discord.js.org/#/docs/collection/master/class/Collection)

#### Листенеры
| Название | Описание | Можно изменять? |
| --- | --- | :-: |
| `404` | Выводит то, что команда не найдена | Да |
| `off` | Выводит то, что команды выключена | Да |
| `use` | Выводит использование команды | Да |
| `message` | Обрабатывает и выполняет команду | Нет

* * *

### `plugin.designs`

Используется для быстрого использования [Embed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed)-сообщений

![Пример вывода](../img/embed_cmd404.png)

#### Свойства

| Название | Описание | Тип |
| --- | --- | --- |
| `add(name, design(args))` | Добавить [`design`](#design) | `function()` |
| `use(name, ...args)` | Использовать [`design`](#design) | `function()` |

#### `add(name, design(args))`
##### Примеры
```js
plugin.designs.add('design_name', (args) => {
    return 'Все аргументы: ' + args.join(', ')
})
```

```js
plugin.designs.add('design_name_rest', ([ some, args, rested ]) => {
    return `${some} ${args} ${rested}`
})
```

```js
plugin.designs.add('design_name_restObj', ([{ rest, object }]) => {
    return `${rest.value} ${object.value}`
})
```

#### `use(name, ...args)`
##### Примеры

```js
plugin.designs.use('design_name', 'тут', 'идут', 'аргументы')
```

```js
plugin.designs.use('design_name_rest', 'Какие-либо', 'значения', 'в массиве')
```

```js
plugin.designs.use('design_name_restObj', {
    rest: {
        value: 'Какое-то значение'
    },
    object: {
        value: 'и ещё одно значение'
    }
})
```

* * *

### `FoxCommand`
#### Свойства 

| Название | Описание | Тип | Пример | Обязателен? | 
| --- | --- | --- | --- | :-: | 
| `base` | Основание | `String` | `base: 'example'` | + |
| `info` | Описание | `String` | `info: 'Пример команды'` | - |
| `emoji` | Эмодзи | `String` | `emoji: ':joy:'` | - |
| `aliases` | Алиасы | `Array<String>` | `aliases: ['eg', 'ex']` | - |
| `args` | Аргументы | `Array<String>` | `args: ['<arg1>', '<arg2>']` | - |
| `execute(msg, args)` | Действие | `function()` | `execute(msg, args) { msg.channel.send('Example') }` | + |
| `off` | Выключен/включен? | `Boolean` | `off: false` | - |

#### Пример

```js
plugin.commands.add({
    base: 'example',
    info: 'Пример команды',
    emoji: ':joy:',
    aliases: ['eg', 'ex'],
    args: ['<arg1>', '<arg2>'],
    off: false,
    execute(msg, args) {
        if (args.length < 0) msg.channel.send('Example')
        else msg.channel.send('Example with ' + args.join(', '))
    }
})
```

* * *
