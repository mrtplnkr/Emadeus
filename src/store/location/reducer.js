import { initialState, filterCities } from './selectors'
import { REQUEST_WEATHER, FILTER_CITIES, SHOW_LOCATIONS } from '../actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        selectedLocation: payload,
      }
    case FILTER_CITIES:
      return {
        ...state,
        selectedCountry: payload,
        availableCities: filterCities(payload),
      }
    case SHOW_LOCATIONS:
      return {
        ...state,
        previousLocations: payload.reverse(),
      }
    default:
      return state
  }
}
