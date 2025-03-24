/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly WEATHER_API_KEY: string;
    // その他の環境変数
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
