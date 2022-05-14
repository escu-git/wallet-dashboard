import { Grid, TextField } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <Grid item container
    style={{display:'flex', justifyContent:'center', marginBottom:'50px', textDecoration:'uppercase'}}
    >
        <h1>Wallet Dashboard</h1>
    </Grid>
  )
}

export default Header