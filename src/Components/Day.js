import { useState } from 'react'
function Day(props) {

    const { date, dayInfo } = props


    return (
        <div className='forecast-day'>
            <h3>{date}</h3>
            <img src={dayInfo.condition.icon} alt='weather icon'></img>
            <p>{dayInfo.condition.text}</p>
            <p>High: {dayInfo.maxtemp_f}</p>
            <p>Low: {dayInfo.mintemp_f}</p>
        </div>
    );
}

export default Day;
