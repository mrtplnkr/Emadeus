
import countries from './countries.json'
import cities from 'cities.json';
import localforage from 'localforage';

const defultCountry = 'LT';
const defaultCity = [{ 
  country: defultCountry,
  lat: "0",
  lng: "0",
  name: "select city",
}];

export const initialState = {
  availableCountries: countries,
  selectedCountry: defultCountry,
  availableCities: filterCities(defultCountry),
  selectedLocation: null,
  previousLocations: []
}

export function filterCities(country) {
  return defaultCity.concat(cities.filter(x => x.country === country))
}

export function mergeLocations(location) {
  localforage.getItem('locations').then(function(locs) {
    const locationSet = new Set(locs);
    locationSet.add(location);
    localforage.setItem('locations', Array.from(locationSet)).then(function(values) {
      console.log('locations stored', values)
    }).catch(function(err) {
      console.log(err);
    });
  }).catch(function(err) {
    console.log(err);
  });
}

export class localDataService {  
  getData = ( param ) => {
    return localforage.getItem(param)
      .then( result => result)
  }
}