import * as React from 'react'
import PropTypes from 'prop-types'

class PreviousLocations extends React.Component {
    render() {
        const { previousLocations } = this.props;
        return (
            <div className="row">
                <p>Previous Locations</p>
                <div className="previousLocationsDiv">
                {
                    previousLocations && previousLocations.length > 0 &&
                        previousLocations.map(
                            x => <p key={x}>{x}</p>
                    )
                }
                </div>
            </div>
        )
    }
}

PreviousLocations.propTypes = {
    previousLocations: PropTypes.array, 
};

export default PreviousLocations;
