import { TwitterApi } from "twitter-api-v2";
import { env } from "../env";

export const client = new TwitterApi({
  appKey: env.X_API_KEY,
  appSecret: env.X_API_KEY_SECRET,
  accessToken: env.X_ACCESS_TOKEN,
  accessSecret: env.X_ACCESS_TOKEN_SECRET,
});
