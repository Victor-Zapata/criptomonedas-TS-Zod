import axios from "axios"
import { CryptoSchema, ResponseSchema } from "../schema/crypto-schema"
import { Pair } from "../types"

export const getCryptos = async () => {
    const { data: { Data } } = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD')
    const result = CryptoSchema.safeParse(Data)
    if (result.success) {
        return result.data
    }
}

export const getResponse = async (pair: Pair) => {
    const data = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`)
    const info = data.data.DISPLAY[pair.criptocurrency][pair.currency];
    const result = ResponseSchema.safeParse(info)
    if (result.success) {
        return result.data
    }

}