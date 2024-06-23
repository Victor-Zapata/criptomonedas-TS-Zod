import { z } from 'zod'

export const CurrencySchema = z.object({
    name: z.string(),
    code: z.string()
})

export const CryptoSchema = z.array(
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Internal: z.string()
        })
    })
)

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

export const ResponseSchema = z.object({
    PRICE: z.string(),
    IMAGEURL: z.string(),
    LASTUPDATE: z.string(), 
    HIGHDAY: z.string(), 
    LOWDAY: z.string(), 
    CHANGEPCT24HOUR: z.string()
})
