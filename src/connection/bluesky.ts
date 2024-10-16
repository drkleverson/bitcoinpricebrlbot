import { AtpAgent } from "@atproto/api";
import { env } from "../env";

export const client = async () => {
  const agent = new AtpAgent({
    service: "https://bsky.social",
  });
  await agent.login({ identifier: env.BS_USERNAME, password: env.BS_PASSWORD });
  return agent;
};
