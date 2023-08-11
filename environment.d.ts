declare global {
  namespace NodeJS {
    interface ProcessEnv {
      isDev: boolean;
      API_KEY: string;
      API_KEY_SECRET: string;
      ACCESS_TOKEN: string;
      ACCESS_TOKEN_SECRET: string;
    }
  }
}

export {};
