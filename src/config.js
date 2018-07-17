const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'http://api.openweathermap.org/data/2.5/weather?appid=19b4838ad66ff87ec1585a1dfd7b74d7&units=metric',
    imageApiUrl: 'http://openweathermap.org/img/w/[ICON].png',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'http://api.openweathermap.org/data/2.5/weather?appid=19b4838ad66ff87ec1585a1dfd7b74d7&units=metric',
    imageApiUrl: 'http://openweathermap.org/img/w/[ICON].png',
  },
}

module.exports = merge(config.all, config[config.all.env])
