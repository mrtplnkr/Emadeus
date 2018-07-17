import * as React from 'react'
import { connect } from 'react-redux'
import { requestCities, requestWeatherForecast, loadLocations } from '../store/actions'
import LocationProvider from '../components/LocationProvider'

const LocationProviderComponent = props => <LocationProvider {...props} />

const mapStateToProps = state => ({
  availableCountries: state.location.availableCountries,
  selectedCountry: state.location.selectedCountry,
  availableCities: state.location.availableCities,
  selectedCity: state.location.selectedLocation,
  previousLocations: state.location.previousLocations,
  forecast: state.weather.forecast,
})

const mapDispatchToProps = {
  loadCities: requestCities,
  showWeather: requestWeatherForecast,
  loadLocations: loadLocations,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationProviderComponent)
