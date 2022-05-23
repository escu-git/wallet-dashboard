import React from 'react'
import { Grid, Typography } from '@mui/material'
import CurrencySwitch from '../Currency/CurrencySwitch'
import { useMediaQuery, useTheme } from '@mui/material';

function Header() {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
    <Grid item container
    style={{display:'flex', 
    justifyContent:'center', 
    padding:'50px 0',
    wrap:'wrap', 
    marginBottom:50, 
    textDecoration:'uppercase',
    position:'relative', 
    backgroundColor:'#3b5998'}}
    >
        <Typography variant='h2' fontSize='24' style={{fontWeight:'bold', color:'#fafafa'}}>WALLET DASHBOARD</Typography>
        {!smallScreen && <CurrencySwitch/>}
    </Grid>
  )
} 

export default Header