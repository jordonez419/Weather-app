import { useState } from 'react'
function City(props) {

    const { cityName, state, currentTemp, realFeel, humidity, low, high, image, description } = props.data
    return (
        <div>
            <div className='city'>
                {cityName ? <h1 className='detail'>{cityName}, {state}</h1> : ''}
                {currentTemp ? <h2 className='detail'>Current Temp: {currentTemp}</h2> : ''}
                {realFeel ? <h3 className='detail'>Real Feel: {realFeel}</h3> : ''}
                {image ? <img className='detail' src={image} alt='weather icon'></img> : ''}
                {description ? <p className='detail'>{description}</p> : ''}
                {humidity ? <p className='detail'>Humidity: {humidity}%</p> : ''}
                {high ? <p className='detail'>High: {high}</p> : ''}
                {low ? <p className='detail'>Low: {low}</p> : ''}
            </div>
        </div>
    );
}

export default City;
