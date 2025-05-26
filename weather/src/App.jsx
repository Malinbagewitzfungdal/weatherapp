import React from 'react'
import { WeatherDisplay } from './components/WeatherDisplay'
import { WeatherDetails } from './components/WeatherDetails'
import { SearchBar } from './components/SearchBar'
import { FavoriteLocations } from './components/FavoriteLocations'
import { useWeatherApp } from './hooks/useWeatherApp'

function App() {
  const {
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
    addFavorite,
    removeFavorite
  } = useWeatherApp()

  const favoriteLocationsProps = {
    favorites,
    onSelect: handleFavoriteSelect,
    removeFavorite
  }
  const searchBarProps = {
    searchQuery,
    setSearchQuery,
    onSearch: handleSearch
  }

  return (
    <div>
      <h1>Väderapplikation</h1>
      <SearchBar {...searchBarProps} />
      <button onClick={addFavorite}>Lägg till som favorit</button>
      <FavoriteLocations {...favoriteLocationsProps} />
      {geoError && <p>Platsfel: {geoError}</p>}
      {searchError && <p>Sökfel: {searchError}</p>}
      {loading && <p>Laddar väder...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <WeatherDisplay data={data} />
          <WeatherDetails forecast={data.forecast} />
        </>
      )}
    </div>
  )
}

export default App
