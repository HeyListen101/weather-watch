import { useState } from 'react'
import Header from './components/Header'
import CurrentWeatherInfo from './components/CurrentWeatherInfo'
import SearchBar from './components/SearchBar'
import FiveDaysForecast from './components/FiveDaysForecast'

const api = {
  key: '749ce292b82c44952a389c0088b00d8b',
  base: 'https://api.openweathermap.org/data/2.5',
}

function App() {
  const [search, setSearch] = useState("")

  const getWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api.key}&units=metric`)
    .then(res => res.json())
    .then(data => {
      const weatherInfo = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        windSpeed: data.wind.speed
      };
      console.log(weatherInfo);
    })
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-[url(./assets/background.jpg)] bg-no-repeat bg-cover bg-center font-[Poppins] text-white'>
      <Header />
      <div className='h-125 w-125 flex flex-col gap-10 items-center'>
        <CurrentWeatherInfo />
        <SearchBar/>
        <FiveDaysForecast />
      </div>
    </div>
  )
}

export default App
