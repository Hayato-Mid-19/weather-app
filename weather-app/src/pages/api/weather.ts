import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const city = url.searchParams.get('city');

    if (!city) {
        return new Response(JSON.stringify({ error: '都市名が必要です' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const apiKey = import.meta.env.WEATHER_API_KEY;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`
        );

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: '天気データの取得に失敗しました' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
