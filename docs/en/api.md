# API

## Objects

### `plugin`
#### Properties

| Name | Description | Type |
| --- | --- | --- |
| [`commands`](#plugincommands) | Commands | `Object` |
| [`_commandListeners`](#plugin_commandListeners) | Command listeners | [`Discord.Collection`](https://discord.js.org/#/docs/collection/master/class/Collection) |
| `random01()` | Random int in range of 0 and 1 | `function()` |
| `randomInt(min, max)` | Random int in range of `min` and `max` | `function()` |
| `randomFloat(min, max)` | Random float in range of `min` and `max` (15 decimal places) | `function()` |
| `randomInRange(min, max)` | Working same as `randomInt()` // whats the difference? | `function()` |
| [`designs`](#plugindesigns) | Designs | `Object` |
| `bot` | Bot | [`Discord.Client`](https://discord.js.org/#/docs/main/stable/class/Client) |
| `locale` | Locale file dependent on bot's language | `Object` |
| `localeString` | Locale function | `function()` |
| `log` | Logging | `function()` |
| `info` | Logging with info prefix | `function()` |
| `err` | Logging with error prefix | `function()` |
| `warn` | Logging with warning prefix | `function()` |
| `pluginInfo` | Logging info of plugins | `function()` |
| `designInfo` | Logging info of designs | `function()` |
| `foxInfo` | [Fox](https://github.com/modularium/fox) logging | `function()` |

#### Example
```js
module.exports = (plugin) => {
    // plugin code
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
#### Properties

| Name | Description | Type |
| --- | --- | --- |
| `add(command)` | Add a [`FoxCommand`](#FoxCommand) | `function()` |
| `remove(command)` | Delete a [`FoxCommand`](#FoxCommand) | `function()` |
| `turn(command.base)` | Turn on/off a [`FoxCommand`](#FoxCommand) | `function()` |
| `use(msg, command.base, args)` | Use a [`FoxCommand`](#FoxCommand) | `function()` |

* * *

### `plugin._commandListeners`
A collection of listeners for processing commands that you can replace
Documentation of `Discord.Collection` are located [here](https://discord.js.org/#/docs/collection/master/class/Collection)

#### Listeners
| Name | Description | Can you change? |
| --- | --- | :-: |
| `404` | Logging that a command not found | Yes |
| `off` | Logging that a command is off | Yes |
| `use` | Logging use of a command | Yes |
| `message` | Parses and running a command | No |

* * *

### `plugin.designs`

Used for a fast using of [Embed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) messages

![Example](../img/embed_cmd404.png)

#### Properties

| Name | Description | Type |
| --- | --- | --- |
| `add(name, design(args))` | Add a [`design`](#design) | `function()` |
| `use(name, ...args)` | Use a [`design`](#design) | `function()` |

#### `add(name, design(args))`
##### Examples
```js
plugin.designs.add('design_name', (args) => {
    return 'All arguments: ' + args.join(', ')
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
##### Examples

```js
plugin.designs.use('design_name', 'there', 'are', 'arguments')
```

```js
plugin.designs.use('design_name_rest', 'Any', 'values', 'of array')
```

```js
plugin.designs.use('design_name_restObj', {
    rest: {
        value: 'Some value'
    },
    object: {
        value: 'and more value'
    }
})
```

* * *

### `FoxCommand`
#### Properties 

| Name | Description | Type | Example | Required? | 
| --- | --- | --- | --- | :-: | 
| `base` | base | `String` | `base: 'example'` | + |
| `info` | Description | `String` | `info: 'Пример команды'` | - |
| `emoji` | Emoji | `String` | `emoji: ':joy:'` | - |
| `aliases` | Aliases | `Array<String>` | `aliases: ['eg', 'ex']` | - |
| `args` | Arguments | `Array<String>` | `args: ['<arg1>', '<arg2>']` | - |
| `execute(msg, args)` | Execution | `function()` | `execute(msg, args) { msg.channel.send('Example') }` | + |
| `off` | Turn off/on? | `Boolean` | `off: false` | - |

#### Example

```js
plugin.commands.add({
    base: 'example',
    info: 'Command example',
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
