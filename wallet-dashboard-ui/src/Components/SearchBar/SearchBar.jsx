import { TextField, Grid, Button, Chip} from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react'

function SearchBar({setWalletId, walletId, searchHandler}) {
  const typedTextHandler = (value) =>{

    setWalletId(value)
  }
  const submitHandler = () =>{
      if(walletId !== ""){
        setWalletId("")
        searchHandler()
      }
      return
  }
  return (
      <Grid
        item 
        container 
        lg={10}
        style={{
          display:'flex', 
          flexDirection:'row',
          justifyContent:'center',
          margin:'auto'
        }}
      >
        <TextField
              label=""
              placeholder='Wallet ID'
              fullWidth
              value={walletId? walletId : ""}
              onChange={(e)=>{typedTextHandler(e.target.value)}}
        />
        <Button onClick={submitHandler}>Search</Button>
      </Grid>
  )
}

export default SearchBar