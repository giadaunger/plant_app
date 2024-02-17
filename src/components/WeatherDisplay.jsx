import React from 'react'

function WeatherDisplay({ weather, setWeather }) {
    return (
        <div>
            <div className="bg-blue-500 w-2/3">
                {weather && (
                    <div>
                        <h2>Location: {weather.name}</h2>
                        <p>Temperature: {weather.main.temp} K</p>
                        <p>Description: {weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        {/* Add more weather data here */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default WeatherDisplay