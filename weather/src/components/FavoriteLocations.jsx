import './SearchBar.css'

export function FavoriteLocations({ favorites, onSelect, removeFavorite }) {
    return (
      <div>
        <h3>Favoritplatser</h3>
        {favorites.length === 0 ? (
          <p>Inga favoriter ännu</p>
        ) : (
          <ul>
            {favorites.map((location, index) => (
              <li key={index}>
                <button onClick={() => onSelect(location)}>{location}</button>
                <button onClick={() => removeFavorite(location)}>ta bort</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  