import React from 'react'

function DayForecast() {
  return (
    <div className='flex flex-col items-center'>
      <span className='font-bold'>Today</span>
      <img src='./assets/Clouds.svg' className='size-12.5'></img>
      <span className='font-medium'>23°C</span>
    </div>
  )
}

export default DayForecast