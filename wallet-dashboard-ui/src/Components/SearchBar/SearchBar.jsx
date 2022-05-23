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
          margin:'50px auto',
          gap:10
        }}
      >
        <TextField
              label="Search"
              placeholder='Insert wallet ID'
              style={{width:'30em', textAlign:'center'}}
              value={walletId? walletId : ""}
              onChange={(e)=>{typedTextHandler(e.target.value)}}
        />
        <Button 
        variant='contained' 
        color='primary' 
        disabled={!walletId} 
        onClick={submitHandler}>Search</Button>
      </Grid>
  )
}

export default SearchBar