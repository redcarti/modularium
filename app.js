const FoxDispatcher = require('./src/lib/FoxDispatcher')

module.exports = {
    run: (config) => {
        require('./src/index').run(config)
    },
    FoxDispatcher: FoxDispatcher
}