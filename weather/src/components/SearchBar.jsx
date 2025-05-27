import './SearchBar.css'

export function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
    const handleChange = (e) => {
      setSearchQuery(e.target.value)
    }
  
    return (
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Sök på en plats"
        />
        <button className='search-btn' onClick={onSearch}>Sök</button>
      </div>
    )
  }
  