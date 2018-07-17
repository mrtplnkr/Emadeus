import * as React from 'react'
import { imageApiUrl } from '../../config'

class WeatherForecast extends React.Component {
    componentDidMount() {
        this.props.loadWeatherForecast(this.props.coords)
    }
    render() {
        const { icon, forecast } = this.props
        return (
        <div>
            <h3>Today's forecast</h3>
            <div>
                <img src={imageApiUrl.replace('[ICON]', icon)} alt="icon" />
                {
                    forecast &&
                    forecast.map(x =>
                        <p key={x.id}>
                        {x.description}</p>)
                }
            </div>
        </div>
        )
    }
}

export default WeatherForecast