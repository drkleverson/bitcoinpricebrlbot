import cron from 'node-cron'
import fearAndGreed from './fearAndGreed'
import price from './price'
import statistics from './statistics'

cron.schedule('*/30 * * * *', price)

cron.schedule('0 7 * * *', fearAndGreed, { timezone: "America/Sao_Paulo" })

cron.schedule('0 20 * * *', statistics, { timezone: "America/Sao_Paulo" })
