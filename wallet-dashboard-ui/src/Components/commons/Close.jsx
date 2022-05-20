import { Grid, Tooltip } from '@mui/material'
import React from 'react'

function Close({setWallet}) {
  return (
    <Grid item style={{
        position:'absolute',
        top: 15,
        right:15
      }}>
      <Tooltip 
        arrow
        disableFocusListener 
        disableTouchListener
        title="Close"
      >
          <i className="fa-solid fa-close" style={{
            color:"black", 
            fontSize:30,
            cursor:'pointer'
            }}
          onClick={()=>setWallet(false)}
          ></i>
      </Tooltip>
      </Grid>
  )
}

export default Close