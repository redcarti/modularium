# Free hostings

> Considered using [repl.it](https://repl.it), not a glitch, here [why](#glitchcom)

## repl.it

On `repl.it` you use [npm install](docs/en_US/use.md#npm-install) method, but:

- Create an `.env` file, in which you creating a variable, in case I will use a `TOKEN`:

```
TOKEN=your_token
```

- Then, change `index.js`:

```js
let config = require('./config.json')
config.token = process.env.TOKEN // in your case you use your variable
require('modularium').run(config)
```

- For preventing that bot is off, see [keepAlive.js](examples/keepAlive.js)

- To check that bot is off and ping it use [UptimeRobot](https://uptimerobot.com)

| Pluses | Minuses |
| --- | --- |
| [Privacy](#replit-privacy) | Laggy (not a big problem) |
| [Monaco-like interface](#monaco) |  |

## glitch.com

`Glitch` - even though it's free it's not so good.

| Pluses | Minuses |
| --- | --- |
| [Privacy](#glitchcom-privacy) | `UptimeRobot` and such services are blocked forever. |
| | `keepAlive.js` isn't working (at least while I was testing it) |
| | Bot isn't active all time, it needs requests or opened tab |

## Conclusion

Easier way to create your bot on `repl.it` and check it on `UptimeRobot`.
___

# Additional information

# Privacy

## `repl.it` privacy
`repl.it` has privacy but only for `.env` file.

So you can store your token in it but your repl will be open (at least if you not buyed Pro)

## `glitch.com` privacy
`glitch.com` has full privacy. That's all

# monaco

Monaco is an editor from Microsoft. VS Code is using monaco 
