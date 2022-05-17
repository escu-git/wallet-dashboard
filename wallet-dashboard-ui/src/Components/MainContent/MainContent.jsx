import React,{Fragment, useEffect, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import * as axios from 'axios'
import { Grid } from '@mui/material';
import WalletCard from '../Cards/WalletCard';
import FavoriteWallets from '../Favorites/FavoriteWallets';
import { getWallet } from '../../Helpers/api-interactions';

function MainContent() {
  const[walletId, setWalletId]=useState(false);
  const[wallet, setWallet]=useState(false);
  const[favoriteList, setFavoriteList]=useState([]);
 
  const searchHandler = async() =>{
    try{
      const response = await getWallet(walletId)
      console.log(response)
        setWallet(response.data)
        setWalletId(false)
    }catch(err){
      throw err
    }
  }

  const getFavoriteWallets = async()=>{
    try{
      const data = await axios.get("http://localhost:5000/favorites/")
      const favorites = data.data.map(async(wallet)=>{
        const res = await getWallet(wallet.walletId);
        return{
          ...wallet, 
          eth:res.data.eth,
          status:res.data.status,
          message:res.data.message,
        }
      })
      Promise.all(favorites)
      .then(res=>setFavoriteList(res))
    }catch(err){
      throw err
    }
  }

  useEffect(()=>{
    getFavoriteWallets();
  },[])

  return (
    <Grid item style={{display:'flex', flexDirection:'column'}}>
      <SearchBar
        setWalletId={setWalletId}
        walletId={walletId}
        searchHandler={searchHandler}
      />
      <Grid item container style={{display:'flex', justifyContent:'center'}}>
          {
            wallet? 
            <WalletCard wallet={wallet}/> :
            <Fragment>
            <i className="fa-solid fa-magnifying-glass" style={{fontSize:100}}></i>
            </Fragment> 
          }
      </Grid>
      <Grid>
        <FavoriteWallets favoriteList={favoriteList}/>
      </Grid>
    </Grid>
  )
}

export default MainContent