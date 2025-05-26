// hooks/useWeatherApp.js
import { useState, useEffect } from 'react'
import { useGeolocation } from './useGeolocation'
import { useWeather } from './useWeather'
import { useSearch } from './useSearch'
import { useFavorites } from './useFavorites'

export function useWeatherApp() {
  const [searchQuery, setSearchQuery] = useState('')
  const { position, error: geoError } = useGeolocation()
  const [coordinates, setCoordinates] = useState(null)

  const { coordinates: searchedCoords, error: searchError, searchCity } = useSearch()
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const lat = coordinates?.lat || position?.lat
  const lon = coordinates?.lon || position?.lon

  const { data, loading, error } = useWeather(lat, lon)

  useEffect(() => {
    if (searchedCoords) {
      setCoordinates(searchedCoords)
    }
  }, [searchedCoords])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchCity(searchQuery)
    }
  }

  const handleAddFavorite = () => {
    if (data?.current?.name) {
      addFavorite(data.current.name)
    }
  }

const handleFavoriteSelect = (cityName) => {
    setSearchQuery(cityName)
    searchCity(cityName)
  }

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
    handleFavoriteSelect,
    geoError,
    searchError,
    loading,
    error,
    data,
    favorites,
    addFavorite: handleAddFavorite,
    removeFavorite,
  }
}
