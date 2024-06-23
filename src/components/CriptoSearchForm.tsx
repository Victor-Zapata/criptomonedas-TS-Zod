import { useState } from "react"
import { currencies } from "../data"
import { CryptoCurrencies, Pair } from "../types"
import ErrorMessage from "./ErrorMessage"
import { useCryptoCurrencyStore } from "../store/store"

type CriptoSearchFormProps = {
    cryptos: CryptoCurrencies
}

const CriptoSearchForm = ({ cryptos }: CriptoSearchFormProps) => {

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })

    }

    const fetchData = useCryptoCurrencyStore((state) => state.fetchData)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        fetchData(pair)
    }



    return (
        <form
            className='form'
            onSubmit={handleSubmit}
        >

            {
                error && <ErrorMessage>{error}</ErrorMessage>
            }

            <div className='field'>
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione --</option>
                    {
                        currencies.map((currency) => (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))
                    }

                </select>
            </div>

            <div className='field'>
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                    onChange={handleChange}
                    value={pair.criptocurrency}
                >
                    <option value="">-- Seleccione --</option>
                    {
                        cryptos.map((crypto) => (
                            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Internal}>{crypto.CoinInfo.FullName}</option>
                        ))
                    }

                </select>
            </div>

            <input type='submit' value='Cotizar' />
        </form>
    )
}

export default CriptoSearchForm