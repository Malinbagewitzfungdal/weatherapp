import { WeatherIcon } from './WeatherIcon';
import './WeatherDetails.css'; 

export function WeatherDetails({ dailyForecast }) {
  if (!dailyForecast || dailyForecast.length === 0) {
    return <p>Ingen prognos tillgänglig ännu...</p>;
  }

  return (
    <div>
      <h3>5-dagars Prognos</h3>
      {dailyForecast.map((day, index) => (
        <div key={index}>
          <p>{day.date}</p>
          <p>Min/Max: {day.temp_min}°C / {day.temp_max}°C</p>
          <WeatherIcon code={day.icon} />
        </div>
      ))}
    </div>
  );
}
