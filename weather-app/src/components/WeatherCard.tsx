import React from 'react';

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

interface WeatherCardProps {
    data: WeatherData | null;
    "client:load"?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
    if (!data) return <p>データがありません</p>;
    console.log(data);
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    {/* <p className="text-gray-500">{data.weather[0].description}</p> */}
                    <p className="text-gray-500">// ディスクリプションを表示する</p>
                    {/* <p className="text-4xl font-bold mt-2">{Math.round(data.main.temp)}°C</p> */}
                    <p className="text-4xl font-bold mt-2">// 温度を表示する°C</p>
                    <div className="mt-4">
                        {/* <p>湿度: {data.main.humidity}%</p> */}
                        <p>湿度: // 湿度を表示%</p>
                        {/* <p>風速: {data.wind.speed} m/s</p> */}
                        <p>風速: 風速を表示 m/s</p>
                    </div>
                </div>
                <div>
                    {/* <img
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={data.weather[0].description}
                        width="100"
                        height="100"
                    /> */}
                    // お天気アイコンを表示
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
