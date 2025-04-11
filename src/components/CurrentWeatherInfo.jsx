import React from 'react'
import clearSkyDay from '/assets/clearSkyDay.svg';
import clearSkyNight from '/assets/clearSkyNight.svg';
import clouds from '/assets/clouds.svg';
import drizzle from '/assets/drizzle.svg';
import mist from '/assets/mist.svg';
import rain from '/assets/rain.svg';
import snow from '/assets/snow.svg';
import thunderstorm from '/assets/thunderstorm.svg';

function CurrentWeatherInfo({ city, country, temp, time, windSpeed, weatherId }) {
  const iconMap = {clearSkyDay, clearSkyNight, clouds, drizzle, mist, rain, snow, thunderstorm};
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
      weatherIcon = "clear_sky_night"
    } else {
      weatherIcon = "clear_sky_day"
    }
  } else {
    weatherIcon = "clouds"
  }

  return (
    <div className='flex flex-col w-[75%]'>
        <div className='flex'>
            <span className='text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold'>{temp ? Math.floor(temp) : 29}</span>
            <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>°C</span>
            <img src={iconMap[weatherIcon]} className='size-18 sm:size-18 md:size-19 lg:size-19 xl:size-20 ml-5 self-center'></img>
        </div>
        <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium'>{city}, {country}</span>
        <div className='flex items-center mt-1'>
            <img src='/assets/clock.svg' className='size-5 mr-2'></img>
            <span>{time}</span>
            <img src='/assets/wind.svg' className='size-5 ml-5 mr-2'></img>
            <span>{windSpeed} <strong>m/s</strong></span>
        </div>
    </div>
  )
}

export default CurrentWeatherInfo
