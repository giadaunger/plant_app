import React, { useEffect, useState } from 'react';
import WeatherDisplay from '../components/WeatherDisplay';

function Home() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Stockholm");
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location, apiKey]);

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather}/>
    </div>
  );
}

export default Home;
