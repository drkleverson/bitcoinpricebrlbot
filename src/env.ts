import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),

  X_API_KEY: str(),
  X_API_KEY_SECRET: str(),
  X_ACCESS_TOKEN: str(),
  X_ACCESS_TOKEN_SECRET: str(),
  BS_USERNAME: str(),
  BS_PASSWORD: str(),
});
