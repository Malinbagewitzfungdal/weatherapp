import { useState } from 'react';
import { fetchCoordinatesByCity } from '../services/service';

export function useSearch() {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const searchCity = async (cityName) => {
    try {
      const coords = await fetchCoordinatesByCity(cityName);
      setCoordinates(coords);
    } catch (err) {
      setError(err.message);
    }
  };

  return { coordinates, error, searchCity };
}
