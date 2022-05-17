import React,{useState} from 'react'
import { Card, CardContent, Grid, Paper, Typography, } from '@mui/material'
import { addFavorite, removeFavorite } from '../../Helpers/api-interactions';
import FavoriteIcon from '../commons/FavoriteIcon'

function WalletCard({wallet}) {
  const icon = wallet.isFavorite? "fa-solid fa-trash" : "fa-solid fa-star";
  
  const manageFavorite = () =>{
    if(!wallet.isFavorite){
      let desc = prompt("Descripción de su wallet",false)
      if(!desc){
        return
      }
      addFavorite(wallet, desc)
    }if(wallet.isFavorite){
      let confirmDelete = confirm("¿Desea borrar ésta wallet?");
      if(confirmDelete){
        removeFavorite(wallet)
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
    <FavoriteIcon manageFavorite={manageFavorite} icon={icon}/>
    <Card sx={{ minWidth: 275, minHeight:300 }}>
      <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h2" color="primary" fontSize={24}> {wallet.walletId}
            </Typography>
            <Typography variant="h3" color="secondary" fontSize={20}>
              {wallet.eth}
            </Typography>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default WalletCard