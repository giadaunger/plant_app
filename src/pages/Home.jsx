import React, { useEffect, useState } from 'react';
import WeatherDisplay from '../components/WeatherDisplay';

function Home() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Bucharest");

  const APIkey = "dbed5a5d5db05158794ce15c5b2f49bc";

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

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
  }, [location]);

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay />
    </div>
  );
}

export default Home;
