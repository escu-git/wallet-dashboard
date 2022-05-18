import React,{Fragment, useEffect, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import * as axios from 'axios'
import { Grid } from '@mui/material';
import WalletCard from '../Cards/WalletCard';
import FavoriteWallets from '../Favorites/FavoriteWallets';
import { getWallet } from '../../Helpers/api-interactions';
import Loading from '../Loading/Loading';
import CurrencySwitch from '../Currency/CurrencySwitch';

function MainContent() {
  const[walletId, setWalletId]=useState(false);
  const[wallet, setWallet]=useState(false);
  const[favoriteList, setFavoriteList]=useState([]);
  const[currency, setCurrency]=useState('Dollar');
  const[error, setError]=useState(false);
  const[updatedFavorites, setUpdatedFavorites]=useState(false);
  const[isLoading, setIsLoading]=useState(false);
  const[loadingFavs, setLoadingFavs]=useState(false);
 
  const searchHandler = async() =>{
    try{
      setIsLoading(true)
      const response = await getWallet(walletId)
      console.log(response.data.status)
      if(response.data.status ==0){
        setError(true)
      }else{
        setError(false)
        setWallet(response.data)
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
      .then(res=>setFavoriteList(res)).then(()=>setLoadingFavs(false))
    }catch(err){
      throw err
    }
  }

  useEffect(()=>{
    getFavoriteWallets()
  },[updatedFavorites])

  return (
    <Grid item style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
    <CurrencySwitch setCurrency={setCurrency} currency={currency}/>
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
        currency={currency}
        setCurrency={setCurrency}
        loadingFavs={loadingFavs}
        />
        
      </Grid>
    </Grid>
  )
}

export default MainContent