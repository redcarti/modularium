# API

## Объекты

### `plugin`
#### Свойства

| Название | Описание | Тип |
| --- | --- | --- |
| [`commands`](#plugin.commands) | Команды | `Object` |
| [`random`](#plugin.random()) | Рандомное число от 0 до 1 | `function()` |
| [`designs`](#designs) | Дизайны | `Object` |
| [`bot`](#bot) | Бот | `Discord.Client` |
| [`locale`](#locale) | Файл локализации, зависимый от языка бота | `Object` |
| [`localeString`](#localeString) | Функция локализации | `function()` |

#### Пример
```js
module.exports = (plugin) => {
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
| `add(command)` | Добавить [`command`](#command) | `function()` |
| `remove(command)` | Удалить [`command`](#command) | `function()` |
| `turn(command.base)` | Вкл/выкл. [`command`](#command) | `function()` |
| `use(msg, command.base, args)` | Использовать [`command`](#command) | `function()` |

* * *

### `plugin.random()`
Возвращает `0` или `1`

* * *

### `plugin.designs`
#### Свойства

| Название | Описание | Тип |
| --- | --- | --- |
| `add(name, design(args))` | Добавить [`design`](#design) | `function()` |
| `use(name, ...args)` | Использовать [`design`](#design) | `function()` |

#### `add(name, design(args))`
##### Пример
```js
plugin.designs.add('design_name', (args) => {
    return 'Designed with args: ' args.join(', ')
})
```

#### `use(name, ...args)`
##### Пример

```js
msg.channel.send(plugin.designs.use('design_name', 'some', 'args'))
```

* * *

### `command`
#### Свойства 

| Название | Описание | Тип | Пример |
| --- | --- | --- | --- | 
| `base` | Основание | `String` | `base: 'example'` |
| `info` | Описание | `String` | `info: 'Пример команды'` |
| `emoji` | Эмодзи | `String` | `emoji: ':joy:'` |
| `aliases` | Алиасы | `Array<String>` | `aliases: ['eg', 'ex']` |
| `args` | Аргументы | `Array<String>` | `args: ['<arg1>', '<arg2>']` |
| `execute(msg, args)` | Действие | `function()` | `execute(msg, args) { msg.channel.send('Example') }`

#### Пример

```js
plugin.commands.add({
    base: 'example',
    info: 'Пример команды',
    emoji: ':joy:',
    aliases: ['eg', 'ex'],
    args: ['<arg1>', '<arg2>']
    execute(msg, args) {
        if (args.length < 0) msg.channel.send('Example')
        else msg.channel.send('Example with ' + args.join(', '))
    }
})
```

* * *
