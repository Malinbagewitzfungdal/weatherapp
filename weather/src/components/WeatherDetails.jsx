import { WeatherIcon } from './WeatherIcon'

export function WeatherDetails({ forecast }) {
  return (
    <div>
      <h3>5-dagars Prognos</h3>
      {forecast.list.slice(0, 5).map((day, index) => (
        <div key={index}>
          <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
          <p>Min/Max: {day.main.temp_min}°C / {day.main.temp_max}°C</p>
          <WeatherIcon code={day.weather[0].icon} />
        </div>
      ))}
    </div>
  )
}
