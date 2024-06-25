import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoCurrencyStore } from "./store/store"
import CriptoPriceDisplay from "./components/CriptoPriceDisplay"

function App() {
  const fetchCryptos = useCryptoCurrencyStore((state) => state.fetchCryptos)
  const cryptos = useCryptoCurrencyStore((state) => state.cryptocurrencies)

  useEffect(() => {
    fetchCryptos()
  }, [])


  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm cryptos={cryptos} />
          <CriptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
