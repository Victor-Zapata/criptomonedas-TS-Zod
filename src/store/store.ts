import { create } from 'zustand'
// import { DraftPatient, Patient } from '../types'
// import { v4 as uuidv4 } from 'uuid'
import { devtools } from 'zustand/middleware'
import { CryptoCurrencies, Pair, Response } from '../types'
import { getCryptos, getResponse } from '../services/CryptoService'


type CryptoCurrencyState = {
    cryptocurrencies: CryptoCurrencies,
    result: Response,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>,
    loading: boolean
}

export const useCryptoCurrencyStore = create<CryptoCurrencyState>()(
    devtools(
        (set) => ({
            cryptocurrencies: [],
            loading: false,
            //aca le digo que trate a este objeto, que inicia vacio, como tipo Response
            //otra opcion es ponerle cada campo como ''
            result: {
                PRICE: '',
                IMAGEURL: '',
                LASTUPDATE: '',
                HIGHDAY: '',
                LOWDAY: '',
                CHANGEPCT24HOUR: '',
            },
            fetchCryptos: async () => {
                const cryptocurrencies = await getCryptos()
                set(() => ({
                    cryptocurrencies
                }))

            },
            fetchData: async (pair) => {
                set(() => ({
                    loading: true
                }))
                const result = await getResponse(pair)
                set(() => ({
                    result: result,
                    loading: false
                }))
            }
        }), {
    }
    ))


// type PatientState = {
//     patients: Patient[],
//     addPatient: (data: DraftPatient) => void,
//     deletePatient: (id: Patient['id']) => void,
//     activeId: Patient['id'],
//     getPatientById: (id: Patient['id']) => void,
//     updatePatient: (data: DraftPatient) => void
// }

// const createPatient = (patient: DraftPatient): Patient => {
//     return { ...patient, id: uuidv4() }
// }
