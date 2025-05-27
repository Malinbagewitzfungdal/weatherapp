// service.js

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const GEO_BASE_URL = 'https://api.openweathermap.org/geo/1.0';
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// 🔍 Hämta koordinater från stad
export async function fetchCoordinatesByCity(cityName) {
  const res = await fetch(`${GEO_BASE_URL}/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
  const data = await res.json();

  if (data.length === 0) {
    throw new Error('Platsen hittades inte');
  }

  return { lat: data[0].lat, lon: data[0].lon };
}

// ☀️ Hämta nuvarande väder
export async function fetchCurrentWeather(lat, lon) {
  const res = await fetch(
    `${WEATHER_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Kunde inte hämta nuvarande väder');
  }
  return res.json();
}

// 🌤️ Hämta väderprognos
export async function fetchForecast(lat, lon) {
  const res = await fetch(
    `${WEATHER_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Kunde inte hämta väderprognos');
  }
  return res.json();
}
