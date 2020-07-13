module.exports = (plugin) => {
    plugin.random = () => {
        return Math.round(Math.random())
    }
}