export const FILTER_CITIES = 'FILTER_CITIES'
export const LOAD_LOCATIONS = 'LOAD_LOCATIONS'
export const SHOW_LOCATIONS = 'SHOW_LOCATIONS'

export function requestCities(country) {
  return {
    type: FILTER_CITIES,
    payload: country,
  }
}

export function loadLocations() {
  return {
    type: LOAD_LOCATIONS
  }
}

export function showLocations(payload) {
  return {
    type: SHOW_LOCATIONS,
    payload: payload ? payload : []
  }
}