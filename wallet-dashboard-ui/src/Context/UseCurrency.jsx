import React,{useState, createContext, useContext, useEffect} from 'react';
import axios from 'axios';
export const currencyContext = createContext();
export const useCurrency = () => useContext(currencyContext);

export const CurrencyProvider = ({children})=>{
    const[currency, setCurrency]=useState('Dollar');
    const[dollar, setDollar]=useState(0)
    const[euro, setEuro]=useState(0)

    const exchangeValue = (eth) =>{
        if(currency == "Dollar"){
            return eth * dollar
        }
        return eth * euro
    }

    useEffect(()=>{
        const getDollar = async()=>{
          const data = await axios.get(`${import.meta.env.VITE_API_DOMAIN}/currency/dollar`)
          return data
          
        }
        const getEuro = async()=>{
          const data = await axios.get(`${import.meta.env.VITE_API_DOMAIN}/currency/euro`)
          return data
        }
        getDollar().then(res=>setDollar(res.data.result.ethusd))
        getEuro().then(res=>setEuro(res.data.ethereum.eur))
      },[])
    return(
        <currencyContext.Provider value={{
            dollar,
            euro,
            currency,
            setCurrency,
            exchangeValue
        }}>
        {children}
        </currencyContext.Provider>
    )
}