import { useLocalStorage } from './useLocalStorage'

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  const addFavorite = (place) => {
    if (!favorites.includes(place)) {
      setFavorites([...favorites, place])
    }
  }

  const removeFavorite = (place) => {
    setFavorites(favorites.filter((fav) => fav !== place))
  }

  return { favorites, addFavorite, removeFavorite }
}
