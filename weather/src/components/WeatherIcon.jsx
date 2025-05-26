export function WeatherIcon({ code }) {
    const iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`
    return <img src={iconUrl} alt="Väderikon" />
  }
  