import React from 'react'

function DayForecast({day, forecast}) {
  let temp = 23
  let srcIcon = "./assets/clouds.svg"
  if (forecast != null) {
    temp = forecast['temp']
    let time = forecast['time']
    let weatherId = forecast['weather']
    let weatherIcon = ""
    if (weatherId < 300) {
      weatherIcon = "thunderstorm"
    } else if (weatherId < 500) {
      weatherIcon = "drizzle"
    } else if (weatherId < 600) {
      weatherIcon = "rain"
    } else if (weatherId < 700) {
      weatherIcon = "snow"
    } else if (weatherId < 800) {
      weatherIcon = "mist"
    } else if (weatherId == 800) {
      if ((parseInt(time.substring(0, 2), 10) > 6 && time[6] == 'P') || (parseInt(time.substring(0, 2), 10) < 6 && time[6] == 'A')) {
        weatherIcon = "clear sky night"
      } else {
        weatherIcon = "clear sky day"
      }
    } else {
      weatherIcon = "clouds"
    }
    srcIcon = "./assets/" + weatherIcon + ".svg"
  }

  return (
    <div className='flex flex-col items-center'>
      <span className='font-bold'>{day}</span>
      <img src={srcIcon} className='size-12.5 m-2'></img>
      <span className='font-medium'>{temp}°C</span>
    </div>
  )
}

export default DayForecast