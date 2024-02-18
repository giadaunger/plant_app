import React, { useEffect } from 'react'
import useStore from '../store'
import SearchBar from './SearchBar';

function WeatherDisplay() {
    const { weather, location, fetchWeather, setLocation, setSearchQuery, searchQuery } = useStore();

    useEffect(() => {
        fetchWeather(location);
    }, [fetchWeather, location]);

    console.log(`weather: ${weather}`)

    return (
        <div>
            <div className="bg-blue-500 w-2/3">
                <SearchBar weather={weather} location={location} setLocation={setLocation} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
                {weather && (
                    <div>
                        <h2>Location: {weather.name}</h2>
                        <p>Temperature: {weather.main.temp} K</p>
                        <p>Description: {weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WeatherDisplay