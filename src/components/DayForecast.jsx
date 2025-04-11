import React from 'react'

function DayForecast({day, forecast}) {
  let temp = 23
  if (forecast != null) {
    temp = forecast['temp'] 
  }
  return (
    <div className='flex flex-col items-center'>
      <span className='font-bold'>{day}</span>
      <img src='./assets/Clouds.svg' className='size-12.5'></img>
      <span className='font-medium'>{temp}°C</span>
    </div>
  )
}

export default DayForecast