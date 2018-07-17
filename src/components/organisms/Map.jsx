import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { imageApiUrl } from '../../config'

class Map extends Component {
   render() {
        const { icon, lat, lon } = this.props;
        const markers = [
            {
                position: {
                    lat: parseFloat(lat),
                    lon: parseFloat(lon),
                }
            }
        ].map((venue, i) => {
            const marker = {
                icon: {
                    url: imageApiUrl.replace('[ICON]', icon),
                },
                position: {
                    lat: venue.position.lat,
                    lng: venue.position.lon,
                }
            }
            return <Marker key={i} {...marker} />
        })
        const MyGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: parseFloat(lat), lng: parseFloat(lon) } }
                defaultZoom = { 9 }>
                { markers }
            </GoogleMap>
        ));
        return(
            <div>
                <MyGoogleMap
                    containerElement={ <div className="mapContainer" /> }
                    mapElement={ <div className="mapElement" /> }
                />
            </div>
        );
    }
};

Map.propTypes = {
    icon: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number, 
};

export default Map;