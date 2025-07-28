/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import CryptoSearch from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => { fetchCryptos() }, [])
  return (
    <div className="container">
      <h1 className="app-title">Cotizador de <span>Cryptomonedas</span> </h1>
      <div className="content">
        <CryptoSearch/>
        <CryptoPriceDisplay/>
      </div>
    </div>
  )
}

export default App
