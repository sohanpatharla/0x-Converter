import { createContext,useState } from "react";

export const CurrencyContext = createContext();
const CurrencyProvider = ({ children }) => {
    const [fromCurrency,setFromCurrency]=useState("🇯🇵 JPY - Japan");
    const [toCurrency,setToCurrency]=useState('🇰🇷 KRW - South Korea');

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
