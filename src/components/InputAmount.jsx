import {Grid, InputAdornment, TextField} from '@mui/material'
export const InputAmount = () => {
  return (
    <Grid item xs={12} md>
        <TextField 
            label="Amount"
            fullWidth
            InputProps={{
                type:"number",
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}
        />
    </Grid>
  )
}
