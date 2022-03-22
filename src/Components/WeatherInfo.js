import { useState } from 'react'
import City from './City';
import Week from './Week';
import axios from 'axios'
function WeatherInfo() {

    const defaultInfo = {
        cityName: '',
        state: '',
        currentTemp: '',
        realFeel: '',
        humidity: '',
        low: '',
        high: '',
        image: '',
        description: '',
        forecast: '',
        date: ''
    }



    const [city, setCity] = useState('')
    const [info, setInfo] = useState(defaultInfo)
    const [error, setError] = useState([])


    const handleChange = (e) => {
        const { value } = e.target;
        setCity(value)
    }

    const submit = (e) => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ae02d3c40edb44cb998211444221203&q=${city}&days=3&aqi=no&alerts=no
        `)
            // .then(res => console.log(res.data))
            .then(res => setInfo({
                cityName: res.data.location.name,
                state: res.data.location.region,
                currentTemp: res.data.current.temp_f,
                realFeel: res.data.current.feelslike_f,
                humidity: res.data.current.humidity,
                low: res.data.forecast.forecastday[0].day.mintemp_f,
                high: res.data.forecast.forecastday[0].day.maxtemp_f,
                image: res.data.current.condition.icon,
                description: res.data.current.condition.text,
                forecast: res.data.forecast.forecastday
            }))
            .catch(error => setError(['Invalid Location']))
        setError([])
    }

    const determineImage = (info) => {
        if (info.description.includes('Cold') || (info.currentTemp && info.currentTemp < 30)) {
            return 'cold'
        }
        if (info.description.includes('rain')) {
            return 'rain'
        }
        if (info.description.includes('Snow')) {
            return 'snow'
        }
        if (info.description.includes('Storm')) {
            return 'storm'
        }
        if (info.description.includes('Sun') || info.currentTemp > 75) {
            return 'sunny'
        }
        if (info.description.includes('Overcast')) {
            return 'overcast'
        }
        if (info.description.includes('Mist')) {
            return 'mist'
        }
        if (info.description.includes('Partly cloudy')) {
            return 'cloudy'
        }
        else {
            return 'neutral'
        }
    }

    return (
        <div className='outer-container'>
            <div className={`${determineImage(info)} fixed`}>
                <h1 className='margin-top'>Enter a City</h1>

                <label htmlFor="city">
                    <input className='margin-top margin-bottom' onChange={handleChange} type="text" name='city' value={city} />
                </label>
                <button onClick={() => submit(city)}>Get Weather!</button>
                {error.length > 0 ? <p className='error'>Invalid Location</p> : ''}
                <City data={info} />
                <Week forecast={info.forecast} />
            </div >

        </div>
    );
}

export default WeatherInfo;
