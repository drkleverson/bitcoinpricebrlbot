declare global {
    namespace NodeJS {
        interface ProcessEnv {
            isDev: boolean;
            consumer_key: string;
            consumer_secret: string;
            access_token: string;
            access_token_secret: string;
        }
    }
}

export { }