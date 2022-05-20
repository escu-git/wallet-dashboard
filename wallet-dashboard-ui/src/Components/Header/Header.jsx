import React from 'react'
import { Grid, Typography } from '@mui/material'
import CurrencySwitch from '../Currency/CurrencySwitch'

function Header() {
  
    return (
    <Grid item container
    style={{display:'flex', justifyContent:'center', padding:'50px 0', marginBottom:50, textDecoration:'uppercase', position:'relative', backgroundColor:'#3b5998'}}
    >
        <Typography variant='h2' fontSize='24' style={{fontWeight:'bold', color:'#fafafa'}}>WALLET DASHBOARD</Typography>
        <CurrencySwitch/>
    </Grid>
  )
} 

export default Header