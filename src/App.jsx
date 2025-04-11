import { useEffect, useState } from 'react'
import Header from './components/Header'
import CurrentWeatherInfo from './components/CurrentWeatherInfo'
import FiveDaysForecast from './components/FiveDaysForecast'

const api = {
  key: '749ce292b82c44952a389c0088b00d8b',
  base: 'https://api.openweathermap.org/data/2.5',
}

function App() {
  let [search, setSearch] = useState("")
  let [forecast, setForecast] = useState([])
  let [weatherInfo, setWeatherInfo] = useState({})
  let currTime = null

  const inputChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const e = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13, // legacy support
      which: 13,   // legacy support
      bubbles: true,
    });

    search = "Manila"
    searchLocation(e);
  }, [])

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeatherInfo({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          weather: data.weather[0].id,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
          windSpeed: data.wind.speed,
        })
      })
      .catch(error => console.error("Error fetching weather data:", error))

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api.key}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        const dailyForecast = {};
        
        data.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!dailyForecast[date] || item.dt_txt.includes("12:00:00")) {
            const newDate = new Date(date)
            dailyForecast[date] = {
              date: date,
              temp: Math.round(item.main.temp),
              weather: item.weather[0].id,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
            }
          }
        })
        setForecast(Object.values(dailyForecast).slice(0, 5))
      })
      .catch((error) => console.error("Error fetching data:", error))

      setSearch('')
    }
  }

  return (
      <div className='flex items-center justify-center min-h-screen bg-[url(./assets/background.jpg)] bg-no-repeat bg-cover bg-center font-[Poppins] text-white'>
        <Header />
        <div className='h-125 w-125 flex flex-col gap-10 items-center'>
          <CurrentWeatherInfo city={weatherInfo.city} country={weatherInfo.country} temp={weatherInfo.temperature} time={weatherInfo.time} windSpeed={weatherInfo.windSpeed} weatherId={weatherInfo.weather} />
          <div className='w-[100%] relative'>
              <img src='./assets/search.svg' className='size-4 absolute left-3 top-1/2 transform -translate-y-1/2'></img>
              <input 
                  type='text'
                  placeholder='Search any city around the world'
                  value={search}
                  onChange={inputChange}
                  onKeyDown={searchLocation}
                  className='w-[100%] h-[30px] bg-white rounded-full text-black pl-[40px] text-xs'
              />
          </div>
          <FiveDaysForecast forecast={forecast} />
        </div>
      </div>
  )
}

export default App
