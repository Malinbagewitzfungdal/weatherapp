import { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "../services/service";

export function useWeather(lat, lon) {
  const [data, setData] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const current = await fetchCurrentWeather(lat, lon);
        const forecast = await fetchForecast(lat, lon);

        
        const dailyData = {};

        forecast.list.forEach((item) => {
          const date = new Date(item.dt * 1000).toLocaleDateString();

          if (!dailyData[date]) {
            dailyData[date] = [];
          }
          dailyData[date].push(item);
        });

        const daily = Object.entries(dailyData)
          .slice(0, 5)
          .map(([date, items]) => {
            const temps = items.map((i) => i.main.temp);
            const temp_min = Math.min(...temps);
            const temp_max = Math.max(...temps);
            const icon = items[Math.floor(items.length / 2)].weather[0].icon;

            return {
              date,
              temp_min: Math.round(temp_min),
              temp_max: Math.round(temp_max),
              icon,
            };
          });

        setData({ current, forecast });
        setDailyForecast(daily);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { data, dailyForecast, loading, error };
}
