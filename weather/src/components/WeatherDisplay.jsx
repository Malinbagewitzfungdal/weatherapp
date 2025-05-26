import { WeatherIcon } from './WeatherIcon'

export function WeatherDisplay({ data }) {
    return (
      <div>
        <h2>Väder för {data.current.name}</h2>
        <p>Temperatur: {data.current.main.temp}°C</p>
        <p>Väder: {data.current.weather[0].description}</p>
        <WeatherIcon code={data.current.weather[0].icon} />
      </div>
    )
  }
  