import * as React from 'react'
import WeatherForecast from './organisms/WeatherForecast';
import Map from '../components/organisms/Map';
import CountrySelection from './organisms/CountrySelection';
import CitySelection from './organisms/CitySelection';
import { geolocated } from 'react-geolocated';

class LocationProvider extends React.Component {
  render() {
    const { availableCountries, selectedCountry, loadCities, 
      availableCities, selectedCity, previousLocations, loadLocations,
      showWeather, forecast,
      isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;
    return (
      <div>
        <main>
          {
            !isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !isGeolocationEnabled
              ? <div>Geolocation is not enabled</div>
              : coords ? 
              <Map icon={forecast[0].icon}
                lat={ selectedCity == null ? coords.latitude : selectedCity.latitude } 
                lon={ selectedCity == null ? coords.longitude : selectedCity.longitude }/>
            : <div>Getting the location data&hellip; </div>
          }
        </main>
        <aside> 
          <div>
            {
              isGeolocationAvailable && isGeolocationEnabled && coords && 
                <WeatherForecast icon={forecast[0].icon} coords={coords} 
                  loadWeatherForecast={showWeather} forecast={forecast} />
            }
            <CountrySelection availableCountries={availableCountries} 
              selectedCountry={selectedCountry} loadCities={loadCities}>
            </CountrySelection>
            <CitySelection previousLocations={previousLocations} loadLocations={loadLocations} 
              availableCities={availableCities} showWeather={showWeather}>
            </CitySelection>
          </div>
        </aside>
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(LocationProvider);
