import { useState, useEffect } from 'react'

function useCurrencyConverter(currency) {
    const [data, setData] = useState({})
    useEffect( () => { 
        //https://open.er-api.com/v6/latest
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    } , [currency]) 
        return data
    }

    export default useCurrencyConverter ;