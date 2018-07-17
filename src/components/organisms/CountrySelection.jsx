import * as React from 'react'
import PropTypes from 'prop-types'

class CountrySelection extends React.Component {
  render() {
    const { selectedCountry, availableCountries, loadCities } = this.props;
    return (
        <div className="row">
            <select defaultValue={selectedCountry} 
                id="country" onChange={(e) => loadCities(e.target.value)}>
                {
                    availableCountries.map(x =>
                        <option key={x.code} value={x.code}>{x.name}</option>)
                }
            </select>
        </div>
    )
  }
}

CountrySelection.propTypes = {
    availableCountries: PropTypes.array, 
    selectedCountry: PropTypes.string,
    loadCities: PropTypes.func,
};

export default CountrySelection;
