import { put, call, takeLatest  } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from '../actions'
import { mergeLocations } from '../location/selectors'
import { apiUrl } from '../../config'

export function fetchWeatherApi(lat, lon) {
  return fetch(`${apiUrl}&lat=${lat}&lon=${lon}`)
  .then(response => response.json())
  .then(json => json.weather)
}

export function* fetchWeather(payload) {
  if (payload.payload.name !== undefined) { 
    yield call(mergeLocations, payload.payload.name)
    yield put(actions.loadLocations())
  }
  const weather = yield call(fetchWeatherApi, payload.payload.latitude, payload.payload.longitude)
  yield put(actions.receiveWeather(weather))
}

export default function* root() {
  yield takeLatest(actions.REQUEST_WEATHER, fetchWeather);
}