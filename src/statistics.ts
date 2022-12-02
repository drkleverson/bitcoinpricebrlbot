import 'dotenv/config';
import { connection } from "./connection/twitter";
import axios from 'axios';
import { env } from './env';

(async () => {
    const result: any = await axios.get('/api/v3/coins/bitcoin', {
        baseURL: "https://api.coingecko.com",
        params: { sparkline: false, community_data: false, developer_data: false, localization: false, tickers: false },
        responseType: 'json'
    })

    const data = result.data.market_data

    let max24hrs = data.high_24h.usd.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
    let min24hrs = data.low_24h.usd.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
    let priceChange7d = data.price_change_percentage_7d.toFixed(2)
    let priceChange7dString = `7 dias: ${priceChange7d > 0 ? '+' : ''}${priceChange7d}%`
    let priceChange30d = data.price_change_percentage_30d.toFixed(2)
    let priceChange30dString = `30 dias: ${priceChange30d > 0 ? '+' : ''}${priceChange30d}%`
    let priceChange60d = data.price_change_percentage_60d.toFixed(2)
    let priceChange60dString = `60 dias: ${priceChange60d > 0 ? '+' : ''}${priceChange60d}%`
    let priceChange1y = data.price_change_percentage_1y.toFixed(2)
    let priceChange1yString = `1 ano: ${priceChange1y > 0 ? '+' : ''}${priceChange1y}%`
    let marketcap = data.market_cap.usd.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
    let marketcapString = `total: ${marketcap}`;
    let marketcapChange = data.market_cap_change_percentage_24h.toFixed(2)
    let marketcapChangeString = `24hrs: ${marketcapChange > 0 ? '+' : ''}${marketcapChange}%`
    let supplyString = `${data.circulating_supply.toLocaleString('pt-BR')} de ${data.max_supply.toLocaleString('pt-BR')}`

    let tweet = `máxima 24hrs: ${max24hrs}\nmínima 24hrs: ${min24hrs}\n\nfornecimento:\n${supplyString}\n\ncap. de mercado:\n${marketcapChangeString}\n${marketcapString}\n\npreço:\n${priceChange7dString}\n${priceChange30dString}\n${priceChange60dString}\n${priceChange1yString}`;

    console.log(tweet);

    if (!env.isDev) {
        await connection.post("statuses/update", { status: tweet });
    }
})();
