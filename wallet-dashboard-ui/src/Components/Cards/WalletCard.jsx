import React,{Fragment, useState} from 'react'
import { Card, CardContent, Grid, Paper, Typography, } from '@mui/material'
import { addFavorite, removeFavorite } from '../../Helpers/api-interactions';
import FavoriteIcon from '../commons/FavoriteIcon'

function WalletCard({wallet, setUpdatedFavorites, updatedFavorites, error}) {
  const icon = wallet.isFavorite? "fa-solid fa-trash" : "fa-solid fa-star";
  
  const manageFavorite = async() =>{
    if(!wallet.isFavorite){
      let desc = prompt("Descripción de su wallet",false)
      if(!desc){
        return
      }
      await addFavorite(wallet, desc)
      .then(()=>setUpdatedFavorites(!updatedFavorites))
    }if(wallet.isFavorite){
      let confirmDelete = confirm("¿Desea borrar ésta wallet?");
      if(confirmDelete){
        removeFavorite(wallet).then(()=>setUpdatedFavorites(!updatedFavorites))
      }
      return
    }
  }
  return (
    <Grid item container lg={12} style={{
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center',
      marginTop:50
      }}>
      {error? <Typography>The wallet doesn't exist</Typography>
      :
      <Fragment>
        <FavoriteIcon manageFavorite={manageFavorite} icon={icon}/>
        <Card sx={{ 
        minWidth: 275, 
        minHeight:300, 
        borderRadius:5,
        padding:5,
        border:10,
        borderColor:'#3b5998'}}>
          <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
            <Grid>
                <Typography variant="h2" color="#3b5998" fontSize={24}>WALLET:</Typography>
                <Typography variant="h3" color="secondary" fontSize={20}> {wallet.walletId}</Typography>
            </Grid>
            <Grid>
            <Typography></Typography>
                <Typography color='primary' fontSize={24}>ETH</Typography>
                <Typography variant="h3" color="secondary" fontSize={20}>
                  {wallet.eth}
                </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Fragment>
      }
    </Grid>
  )
}

export default WalletCard