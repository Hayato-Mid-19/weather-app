import React, { useState } from 'react';
import WeatherCard from './WeatherCard';

interface WeatherData {
    name: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
}

interface WeatherAppProps {
    defaultCities: string[];
    defaultWeatherData: Record<string, WeatherData | null>;
}

const WeatherApp: React.FC<WeatherAppProps> = ({ defaultCities, defaultWeatherData }) => {
    const [city, setCity] = useState<string>('Tokyo');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(defaultWeatherData[city]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>('');

    const searchWeather = async (cityName: string): Promise<void> => {
        if (!cityName) return;

        try {
            setLoading(true);
            const response = await fetch(`/api/weather?city=${cityName}`);
            const data = await response.json();

            setWeatherData(data);
            setCity(cityName);
        } catch (error) {
            console.error('天気データの取得中にエラーが発生しました:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
        <div className="mb-6 flex flex-col sm:flex-row gap-2">
            <select
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                    setWeatherData(defaultWeatherData[e.target.value]);
                }}
                className="p-2 border rounded"
                >
                {defaultCities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <div className="flex">
                <input
                    type="text"
                    placeholder="都市を検索..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="p-2 border rounded-l w-full"
                />
                <button
                    onClick={() => searchWeather(searchInput)}
                    className="bg-blue-500 text-white p-2 rounded-r"
                >
                    検索
                </button>
            </div>
        </div>

        {loading ? (
            <p className="text-center">データを読み込み中...</p>
        ) : weatherData ? (
            <WeatherCard data={weatherData} />
        ) : (
            <p className="text-center">天気データがありません</p>
        )}
        </div>
    );
};

export default WeatherApp;
