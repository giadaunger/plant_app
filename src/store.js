import { create } from 'zustand';

const useStore = create((set) => ({
    weather: null,
    location: "Paris",
    searchQuery: "",
    fetchWeather: async (location) => {
        try {
            const APIkey = import.meta.env.VITE_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            set({ weather: data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    setLocation: (newLocation) => set({ location: newLocation }),
    setSearchQuery: (query) => set({ searchQuery: query })
}));

export default useStore;
