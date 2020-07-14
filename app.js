const path = require('path')
const config = require(path.join(process.cwd(), 'config.json'))

module.exports.run = require('./src/index').run(config)