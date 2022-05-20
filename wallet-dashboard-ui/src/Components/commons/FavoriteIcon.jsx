import { Grid, Tooltip } from '@mui/material'
import React from 'react'

function FavoriteIcon({manageFavorite, icon}) {
    let color = 'green'
  return (
    <Grid item style={{
      position:'absolute',
      bottom: 15,
      right:15
    }}>
    <Tooltip 
      arrow
      disableFocusListener 
      disableTouchListener
      title="Add to favorites!"
      
    >
        <i className={icon} style={{
          color:{color}, 
          fontSize:30,
          cursor:'pointer'
          }}
        onClick={()=>manageFavorite()}
        ></i>
    </Tooltip>
    </Grid>
  )
}

export default FavoriteIcon