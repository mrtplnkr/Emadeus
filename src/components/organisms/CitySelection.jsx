import * as React from 'react'
import PropTypes from 'prop-types'
import PreviousLocations from './PreviousLocations';

class CitySelection extends React.Component {
    componentDidMount() {
        this.props.loadLocations();
    }
    render() {
        const { previousLocations, availableCities, showWeather } = this.props;
        return (
            <div className="row">
                <select id="city" 
                    onChange={(e) => showWeather(availableCities[e.target.value])}>
                    {
                        availableCities.map(x =>
                            <option key={`${x.name+x.lat+x.lng}`} name={`${x.name}`} 
                                value={availableCities.indexOf(x)}>{x.name}</option>)
                    }
                </select>
                <PreviousLocations previousLocations={previousLocations}></PreviousLocations>
            </div>
        )
    }
}

CitySelection.propTypes = {
    previousLocations: PropTypes.array,
    availableCities: PropTypes.array, 
    showWeather: PropTypes.func,
};

export default CitySelection;
