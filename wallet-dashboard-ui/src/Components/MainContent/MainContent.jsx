import React,{Fragment, useEffect, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import * as axios from 'axios'
import { Grid } from '@mui/material';
import WalletCard from '../Cards/WalletCard';
import FavoriteWallets from '../Favorites/FavoriteWallets';
import { getWallet, isOld } from '../../Helpers/api-interactions';
import Loading from '../Loading/Loading';

function MainContent() {
  const[walletId, setWalletId]=useState(false);
  const[wallet, setWallet]=useState(false);
  const[favoriteList, setFavoriteList]=useState([]);
  const[error, setError]=useState(false);
  const[updatedFavorites, setUpdatedFavorites]=useState(false);
  const[isLoading, setIsLoading]=useState(false);
  const[loadingFavs, setLoadingFavs]=useState(false);
 
  const searchHandler = async() =>{
    try{
      setIsLoading(true)
      const response = await getWallet(walletId)
      if(response.data.status ==0){
        setError(true)
      }else{
        const setIsOld = await isOld(walletId);
        const result = {...response.data, setIsOld:setIsOld.data}
        setError(false)
        setWallet(result)
      }
      setWalletId(false)
      setIsLoading(false)
    }catch(err){
      throw err
    }
  }

  
  const getFavoriteWallets = async()=>{
    try{
      setLoadingFavs(true);
      const data = await axios.get(`${import.meta.env.VITE_API_DOMAIN}/favorites/`)
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
      .then(res=>setFavoriteList(res)).then(()=>setLoadingFavs(false))
    }catch(err){
      throw err
    }
  }

  useEffect(()=>{
    getFavoriteWallets()
  },[updatedFavorites])

  console.log(wallet)
  return (
    <Grid item style={{display:'flex', flexDirection:'column',justifyContent:'space-between'}}>
   
      <SearchBar
        setWalletId={setWalletId}
        walletId={walletId}
        searchHandler={searchHandler}
       
      />
      <Grid item container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {isLoading? <Loading/>:
      <Fragment>
          {
            wallet || error?
            <WalletCard 
              wallet={wallet}
              setWallet={setWallet}
              updatedFavorites={updatedFavorites}
              setUpdatedFavorites={setUpdatedFavorites}
              error={error}
              /> :
            <Fragment>
            <i className="fa-solid fa-magnifying-glass" style={{fontSize:100}}></i>
            </Fragment> 
          }
      </Fragment>
      }
      </Grid>
      <Grid>
        <FavoriteWallets 
        favoriteList={favoriteList} 
        getFavoriteWallets={getFavoriteWallets}
        updatedFavorites={updatedFavorites} 
        setUpdatedFavorites={setUpdatedFavorites}
        loadingFavs={loadingFavs}
        />
      </Grid>
    </Grid>
  )
}

export default MainContent