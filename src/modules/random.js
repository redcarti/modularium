module.exports = (plugin) => {
  plugin.random01 = () => {
    return Math.round(Math.random())
  }

  plugin.randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  plugin.randomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  plugin.randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  
}
