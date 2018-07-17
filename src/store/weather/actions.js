export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function requestWeatherForecast(coords) {
  // let arrLatLon = latlon.split('||');
  return {
    type: REQUEST_WEATHER,
    payload: {
      name: coords.name,
      latitude: coords.latitude ? coords.latitude : coords.lat,
      longitude: coords.longitude ? coords.longitude : coords.lng
    }
  }
}

export function receiveWeather(payload) {
  return {
    type: RECEIVE_WEATHER,
    payload,
    receivedAt: Date.now(),
  }
}