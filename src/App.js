import React, { Component } from 'react';
import './App.css';

import LocationProvider from './containers/LocationProvider';

class App extends Component {
  render() {
    return (
      <div className="app">
          <LocationProvider inputId="countrySelect">
          </LocationProvider>
      </div>
    );
  }
}

export default App;
