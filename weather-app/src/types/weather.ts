// src/types/weather.ts
export interface WeatherData {
    name: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        humidity: number;
        feels_like?: number;
        pressure?: number;
    };
    wind: {
        speed: number;
        deg?: number;
    };
    sys?: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    coord?: {
        lat: number;
        lon: number;
    };
}
