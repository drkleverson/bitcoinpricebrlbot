import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),

  access_token: str(),
  access_token_secret: str(),
  consumer_key: str(),
  consumer_secret: str(),
});
