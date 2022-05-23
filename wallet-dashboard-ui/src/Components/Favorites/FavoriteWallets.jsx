import React,{Fragment} from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Grid, Tooltip, Typography } from '@mui/material';
import {removeFavorite } from '../../Helpers/api-interactions';
import Loading from '../Loading/Loading';
import {useCurrency} from '../../Context/UseCurrency'
import { useMediaQuery, useTheme } from '@mui/material';



function FavoriteWallets({favoriteList, updatedFavorites, setUpdatedFavorites, loadingFavs}) {
    const currencyContext = useCurrency()
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const ok = <i 
    className="fa-solid fa-check" 
    style={{
      color:'#3b5998',
      fontSize:26,
      cursor:'pointer'
    }} 
    ></i>
    const notok=<i 
    className="fa-solid fa-xmark" 
    style={{
      color:'#FA0000',
      fontSize:20,
      cursor:'pointer'
    }} 
    ></i>

    const favorites = favoriteList?.map(fav=>{
        return{
            ...fav,
            currency:currencyContext.exchangeValue(fav.eth),
            status:fav.status ==1?ok:notok,
            isOld:fav.isOld?'Old Wallet':'New Wallet',
            delete:(<Tooltip
                arrow
                disableFocusListener 
                disableTouchListener
                title="Remove from favorites"
              >
              <i 
              className="fa-solid fa-heart-circle-xmark" 
              style={{
                color:'#FA0000', 
                fontSize:18,
                cursor:'pointer'
              }} 
              onClick={()=>remove(fav.walletId)}></i>
              </Tooltip>)
            }
    })

    const remove = async(wallet) =>{
        try{
            const remove = await removeFavorite(wallet);
            if(remove){
                setUpdatedFavorites(!updatedFavorites)
            }
        }catch(err){
            throw err
        }
    }
    const styledColumn ={
        display: smallScreen && 'flex', 
        flexDirection:smallScreen && 'column',
        overflow:'hidden'
    }
    return (
        <Grid item  style={{
                display:'flex', 
                flexDirection: 'column', 
                justifyContent:'center', 
                margin:'150px auto', 
                width: smallScreen? '100%':'90%',
            }}>
            {loadingFavs? <Loading/>:
            <Fragment>
            <Typography fontSize={24} color='#3b5998' >Favorite wallets</Typography>
            <DataTable value={favorites} responsiveLayout="stack">
                <Column field="description" header="Description" sortable style={styledColumn} ></Column>
                <Column field="walletId" header="Wallet" sortable style={styledColumn}></Column>
                <Column field="status" header="Status" sortable style={styledColumn} ></Column>
                <Column field='isOld' header="Wallet age" style={styledColumn} sortable></Column>
                <Column field="eth" header="ETH" sortable style={styledColumn}></Column>
                <Column field="currency" header={`${currencyContext.currency}`} sortable style={styledColumn}></Column>
                <Column field='delete' header="" style={styledColumn}></Column>
            </DataTable>
            </Fragment>
            }
        </Grid>
  );
}

export default FavoriteWallets;