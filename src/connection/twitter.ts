import { TwitterApi } from "twitter-api-v2";
import { env } from "../env";

export const client = new TwitterApi({
  appKey: env.API_KEY,
  appSecret: env.API_KEY_SECRET,
  accessToken: env.ACCESS_TOKEN,
  accessSecret: env.ACCESS_TOKEN_SECRET,
});
