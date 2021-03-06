import React,{Fragment, useState} from 'react'
import { Card, CardContent, Divider, Grid, Paper, Typography, } from '@mui/material'
import { addFavorite } from '../../Helpers/api-interactions';
import FavoriteIcon from '../commons/FavoriteIcon'
import { useCurrency } from '../../Context/UseCurrency';
import AddModal from '../Modal/AddModal';
import Close from '../commons/Close';
import Nowallet from '../404/NoWallet';

function WalletCard({wallet, setWallet, setUpdatedFavorites, updatedFavorites, error}) {
  const[openModal, setOpenModal]=useState(false); 
  const[walletDescription, setWalletDescription]=useState("")
  const icon = wallet.isFavorite? null : "fa-solid fa-heart-circle-plus";
  const currencyContext = useCurrency()
  // console.log(wallet)
  const addWallet = async() =>{
      await addFavorite(wallet, walletDescription)
      .then(()=>{
        setUpdatedFavorites(!updatedFavorites)
        wallet.isFavorite=true
        setOpenModal(false)
      })
  }
  return (
    <Grid item container lg={12} style={{
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center',
      marginTop:50
      }}>
      {error? <Nowallet/>
      :
      <Fragment>
        <Card sx={{ 
        minWidth: 275, 
        minHeight:300, 
        borderRadius:5,
        padding:"15px 5px",
        border:10,
        borderColor:'#3b5998',
        position:'relative'}}>
          <CardContent style={{
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center', }}>
            <Grid>
                <FavoriteIcon manageFavorite={()=>{setOpenModal(true)}} icon={icon} onClick={()=>setOpenModal(true)}/>
                <Close setWallet={setWallet}/>
                <Typography variant="h2" color="primary" fontWeight='bold' fontSize={24}>WALLET:</Typography>
                <Typography variant="h3" color="secondary" fontSize={20}> {wallet.walletId}</Typography>
                <Typography variant="h3" color="primary" fontSize={20} margin='5px auto'>
                  {wallet.isOld?'Old':'New'} wallet
                </Typography>
            <Divider/>
            </Grid>
            <Grid>
                <Typography color='primary' fontSize={24}>ETH</Typography>
                <Typography variant="h3" color="secondary" fontSize={20}>
                  {wallet.eth}
                </Typography>
                <Divider/>
                <Typography color='primary' fontSize={24}>{currencyContext.currency}</Typography>
                <Typography variant="h3" color="secondary" fontSize={20}>
                  {currencyContext.exchangeValue(wallet.eth)}
                </Typography>
                <Divider/>
            </Grid>
          </CardContent>
        </Card>
        <AddModal setOpenModal={setOpenModal} openModal={openModal} setWalletDescription={setWalletDescription} addWallet={addWallet} walletDescription={walletDescription}/>
      </Fragment>
      }
    </Grid>
  )
}

export default WalletCard