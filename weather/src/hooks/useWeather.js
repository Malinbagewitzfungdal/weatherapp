import { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export function useWeather(lat, lon) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!lat || !lon) return

    const fetchWeather = async () => {
      setLoading(true)
      try {
        const currentRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        )
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        )

        if (!currentRes.ok || !forecastRes.ok) {
          throw new Error('Kunde inte hämta väderdata')
        }

        const current = await currentRes.json()
        const forecast = await forecastRes.json()

        setData({ current, forecast })
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [lat, lon])

  return { data, loading, error }
}
