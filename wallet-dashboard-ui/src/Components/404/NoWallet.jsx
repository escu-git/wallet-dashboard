import { Grid, Typography } from '@mui/material'
import React from 'react'

function Nowallet() {
  return (
    <Grid item style={{display:'flex', flexDirection:'column', gap:30}}>
        <i 
            className="fa-solid fa-circle-exclamation" 
            style={{
              color:'#3b5998',
              fontSize:40,
              cursor:'pointer'
            }} 
            ></i>
        <Typography variant='h4'>Could't find that wallet</Typography>
    </Grid>
  )
}

export default Nowallet