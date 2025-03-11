import React from 'react'
import DayForecast from './DayForecast'

function FiveDaysForecast() {
  return (
    <div className='w-[100%]'>
        <p className='w-[100%] border-b-white border-b-2 pb-2 font-black mb-5 text-lg'>5-Day Forecast</p>
        <div className='flex justify-around'>
            <DayForecast />
            <DayForecast />
            <DayForecast />
            <DayForecast />
            <DayForecast />
        </div>    
    </div>
  )
}

export default FiveDaysForecast
