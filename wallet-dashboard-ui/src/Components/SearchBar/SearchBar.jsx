import { TextField, Grid, Button} from '@mui/material'
import React from 'react'

function SearchBar({setWalletId, walletId, searchHandler}) {
  const typedTextHandler = (value) =>{

    setWalletId(value)
  }
  const submitHandler = () =>{
      if(walletId !== ""){
        setWalletId("")
        searchHandler(walletId)
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