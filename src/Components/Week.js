import { useState } from 'react'
import Day from './Day';
function Week(props) {
    const { forecast } = props
    // console.log(forecast)
    return (
        <div className='forecast-container'>
            {/* <h1 className='title'>Forecast</h1> */}
            <div className='forecast'>
                {forecast.length > 0 ? forecast.map(el => <Day date={el.date} dayInfo={el.day} key={forecast.indexOf(el)} />) : ''}
            </div>
        </div>
    );
}

export default Week;
