import { TextField, Grid} from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'

function SearchBar() {
  return (
      <Grid
      item container lg={10}
      style={{display:'flex', justifyContent:'center', margin:'auto'}}
      >
    <TextField
        
          id="outlined-disabled"
          label="Let's check that wallet!"
          placeholder='Wallet ID'
          fullWidth
        />
      </Grid>
  )
}

export default SearchBar