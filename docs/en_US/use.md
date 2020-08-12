# Use

## `git clone`

You can clone this repo and access to internal modules but it's intended for using [other way](#npm-install)

## `npm install`

- Install modularium, `npm install --save https://github.com/redcarti/modularium` *or* `npm install --save modularium`

- Then, create an `index.js` file with this code:

```js
require('modularium').run(require('./config.json'))
```

- Then, create `config.json` with this example (it's not full, so see [docs](docs/en_US/api.md)):
```json
{
    "bot": {
        "token": "your_token",
        "prefix": "!",
        "generateLink": true
    },
    "lang": "en_US",
    "user": {
        "typing": 1000
    },
    "features": {
        "preventCmdNotFound": true,
        "updates": true
    }
}
```

- Done! You can run it using `node index`.

# Free hostings 

If you don't want to host your bot on your PC or paid hosting, you can use free hosting, see:

| **ru_RU** | **en_US** | other |
| --- | --- | --- |
| [Russian](docs/ru_RU/freehost.md) | [English](docs/en_US/freehost.md) | [submit PR!](https://github.com/redcarti/modularium/pulls) |
