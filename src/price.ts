import "dotenv/config";
import { client as XClient } from "./connection/x";
import { client as BSClient } from "./connection/bluesky";
import * as tools from "./tools";
import axios from "axios";

(async () => {
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
  const post = `R$ ${tools.moneyFormat(result.data.bitcoin.brl)}
$ ${tools.moneyFormat(result.data.bitcoin.usd)}
€ ${tools.moneyFormat(result.data.bitcoin.eur)}
  
variação 24 horas: ${negative + tools.moneyFormat(change)}%
  
#bitcoin`;

  console.log(post);

  const bs = await BSClient();
  bs.post({ text: post });
  XClient.v2.tweet({ text: post });
})();
