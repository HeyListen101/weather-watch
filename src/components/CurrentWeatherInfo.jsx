import React from 'react'

function CurrentWeatherInfo() {
  return (
    <div className='flex flex-col w-[75%]'>
        <div className='flex'>
            <span className='text-9xl font-bold'>23</span>
            <span className='text-4xl font-semibold'>°C</span>
            <img src='./assets/Clouds.svg' className='ml-5 size-20 self-center'></img>
        </div>
        <span className='text-4xl font-medium'>Baybay, Philippines</span>
        <div className='flex items-center mt-1'>
            <img src='./assets/clock.svg' className='size-5 mr-2'></img>
            <span>10:31</span>
            <img src='./assets/wind.svg' className='size-5 ml-5 mr-2'></img>
            <span>4 <strong>m/s</strong></span>
        </div>
    </div>
  )
}

export default CurrentWeatherInfo
