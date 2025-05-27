import { getLocalTimeFromOffset } from '../utils/time';

export function WeatherDisplay({ data }) {
  const { current } = data;
  const localTime = getLocalTimeFromOffset(current.timezone);

  return (
    <div>
      <h2>{current.name}</h2>
      <p>Temperatur: {Math.round(current.main.temp)}°C</p>
      <p>Väder: {current.weather[0].description}</p>
      <p>Lokal tid: {localTime}</p>
    </div>
  );
}
