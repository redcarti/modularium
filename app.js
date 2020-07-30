const { RopeModule } = require('./src/lib/Rope')

module.exports = {
    run: (config) => {
        require('./src/index').run(config)
    },
    RopeModule
}