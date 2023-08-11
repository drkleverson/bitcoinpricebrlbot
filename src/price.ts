import "dotenv/config";
import { client } from "./connection/twitter";
import * as tools from "./tools";
import axios from "axios";
import { env } from "./env";

export default async () => {
  const result: any = await axios.get("/api/v3/simple/price", {
    baseURL: "https://api.coingecko.com",
    params: {
      ids: "bitcoin",
      vs_currencies: "brl,usd,eur",
      include_24hr_change: true,
    },
    responseType: "json",
  });

  const change = result.data.bitcoin.usd_24h_change;
  const negative = change > 0 ? "+" : "";
  const tweet = `R$ ${tools.moneyFormat(result.data.bitcoin.brl)}
$ ${tools.moneyFormat(result.data.bitcoin.usd)}
€ ${tools.moneyFormat(result.data.bitcoin.eur)}
  
variação 24 horas: ${negative + tools.moneyFormat(change)}%
  
#bitcoin`;

  console.log(tweet);
  if (!env.isDev) {
    client.v2.tweet({ text: tweet });
  }
};
