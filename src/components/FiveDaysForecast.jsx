import React from 'react'
import DayForecast from './DayForecast'

function FiveDaysForecast({forecast}) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const today = new Date()

    return (
        <div className='w-[100%]'>
            <p className='w-[100%] border-b-white border-b-2 pb-2 font-black mb-5 text-lg'>5-Day Forecast</p>
            <div className='flex justify-around'>
                <DayForecast day='Today' forecast={forecast[0]}/>
                <DayForecast day={days[(today.getDay() + 1) % 7]} forecast={forecast[1]} />
                <DayForecast day={days[(today.getDay() + 2) % 7]} forecast={forecast[2]}/>
                <DayForecast day={days[(today.getDay() + 3) % 7]} forecast={forecast[3]}/>
                <DayForecast day={days[(today.getDay() + 4) % 7]} forecast={forecast[4]}/>
            </div>    
        </div>
    )
}

export default FiveDaysForecast
