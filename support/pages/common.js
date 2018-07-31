module.exports = {

  sleep (milliseconds) {
    let start = new Date().getTime()
    while( new Date().getTime() < start + milliseconds );
  },

  ranNumGenerator (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

}