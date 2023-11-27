import './App.css'
import { Button, Container, Grid, Typography } from '@mui/material'
import { InputAmount } from './components/inputAmount'
import { SelectCountry } from './components/selectCountry'
import { SwitchCurrency } from './components/switchCurrency'
import { useContext } from 'react'
import { CurrencyContext } from './context/CurrencyContext'

function App() {
  const{
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  }=useContext(CurrencyContext)

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
