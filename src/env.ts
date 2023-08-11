import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),

  API_KEY: str(),
  API_KEY_SECRET: str(),
  ACCESS_TOKEN: str(),
  ACCESS_TOKEN_SECRET: str(),
});
