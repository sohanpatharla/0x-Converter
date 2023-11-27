import './App.css'
import { Button, Container, Grid, Typography } from '@mui/material'
import { InputAmount } from './components/inputAmount'
import { SelectCountry } from './components/selectCountry'
import { SwitchCurrency } from './components/switchCurrency'
import { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from './context/CurrencyContext'
import axios from 'axios'

function App() {
  const{
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  }=useContext(CurrencyContext)
 
  const [resultCurrency,setResultCurrency]=useState(0);
  const codeFromCurrency=fromCurrency.split(" ")[1];
  const codeToCurrency=toCurrency.split(" ")[1];


  useEffect (() => {
    if(firstAmount) {
    axios("https://api.freecurrencyapi.com/v1/latest", {
    params: {
    apikey: "fca_live_IQBnmVuzglUcXYrHdTWUMSVUfSFxSYoc0svZC8Kd",
    base_currency: codeFromCurrency,
    currencies:codeToCurrency
    }
    })
    .then(response=>setResultCurrency(response.data.data[codeToCurrency]))
    .catch(e=>console.log(e));

    }
    }, [firstAmount] )
    console.log(resultCurrency);

  const boxStyles={
    background:"#fdfdfd",
    marginTop:"10rem",
    textAlign:"center",
    color:"#222",
    minHeight:"20rem",
    borderRadius:2,
    padding:"4rem 3rem",
    boxShadow:" 0px 10px 15px -3px rgba(0,0,0,0.1)",
  }
  return (
    <Container maxWidth="md" sx={boxStyles}>
    <Button>Click</Button>
    <Typography variant='h5'sx={{marginBottom:"2rem"}}>Use our 0x-Converter and stay ahead of rest!</Typography>
    <Grid container spacing={2}>
    <InputAmount />
    <SelectCountry value={fromCurrency} setValue= {setFromCurrency} label="from" />
    <SwitchCurrency />
    <SelectCountry value={toCurrency} setValue= {setToCurrency} label="to"/>
    </Grid>
    </Container>
    
  )
}

export default App
