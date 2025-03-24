// src/utils/formatWeather.ts
import type { WeatherData } from '../types/weather';

export const formatTemperature = (temp: number): string => {
    return `${Math.round(temp)}°C`;
};

export const getWeatherIconUrl = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const getTimeFromTimestamp = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
    const response = await fetch(`/api/weather?city=${city}`);
    if (!response.ok) {
        throw new Error('天気データの取得に失敗しました');
    }
    return response.json();
};
