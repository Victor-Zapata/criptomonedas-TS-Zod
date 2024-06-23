import { create } from 'zustand'
// import { DraftPatient, Patient } from '../types'
// import { v4 as uuidv4 } from 'uuid'
import { devtools, persist } from 'zustand/middleware'
import { CryptoCurrencies, Pair } from '../types'
import { getCryptos, getResponse } from '../services/CryptoService'


type CryptoCurrencyState = {
    cryptocurrencies: CryptoCurrencies,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoCurrencyStore = create<CryptoCurrencyState>()(
    devtools(
        persist(
            (set) => ({
                cryptocurrencies: [],
                fetchCryptos: async () => {
                    const cryptocurrencies = await getCryptos()
                    set(() => ({
                        cryptocurrencies
                    }))

                },
                fetchData: async (pair) => {
                    const result = await getResponse(pair)
                    console.log(result);
                }
            }), {
            name: 'cryptoCurrencies-storage'
        })
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
