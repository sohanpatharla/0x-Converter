import {Button, Grid} from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { CurrencyContext } from '../context/CurrencyContext';
import { useContext } from 'react';


export const SwitchCurrency = () => {
  const{
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  }=useContext(CurrencyContext)
  
  const handleClick=()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  
  return (
    <Grid item xs={12} md="auto" >
      <Button onClick={handleClick} sx={{
        borderRadius:1,
        height:"100%"
      }}>
      <CompareArrowsIcon sx={{fontSize:30}} />
      </Button>
    </Grid> 
  )
}
