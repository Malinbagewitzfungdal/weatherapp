import { useState } from 'react'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export function useSearch() {
  const [coordinates, setCoordinates] = useState(null)
  const [error, setError] = useState(null)

  const searchCity = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      )
      const data = await res.json()
      if (data.length === 0) {
        throw new Error('Platsen hittades inte')
      }
      setCoordinates({ lat: data[0].lat, lon: data[0].lon })
    } catch (err) {
      setError(err.message)
    }
  }

  return { coordinates, error, searchCity }
}
