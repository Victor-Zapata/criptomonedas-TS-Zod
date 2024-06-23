
import { CryptoSchema, CurrencySchema, PairSchema, ResponseSchema } from '../schema/crypto-schema'
import { z } from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrencies = z.infer<typeof CryptoSchema>
export type Pair = z.infer<typeof PairSchema>
export type Response = z.infer<typeof ResponseSchema>