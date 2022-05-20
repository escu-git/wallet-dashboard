import React,{Fragment, useState} from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Grid, Typography } from '@mui/material';
import {removeFavorite } from '../../Helpers/api-interactions';
import Loading from '../Loading/Loading';
import {useCurrency} from '../../Context/UseCurrency'

function FavoriteWallets({favoriteList, updatedFavorites, setUpdatedFavorites, loadingFavs}) {

    const currencyContext = useCurrency()

    const favorites = favoriteList?.map(fav=>{
       
        return{
            ...fav,
            currency:currencyContext.exchangeValue(fav.eth),
            delete:<i className="fa-solid fa-trash" 
            style={{color:'red', fontSize:18}} 
            onClick={()=>remove(fav.walletId)}></i>
            }
    })

    const remove = async(wallet) =>{
        try{
            console.log(wallet)
            const remove = await removeFavorite(wallet);
            if(remove){
                setUpdatedFavorites(!updatedFavorites)
            }
        }catch(err){
            throw err
        }
    }

    return (
        <Grid item  style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'150px auto', width:'90%'}}>
            {loadingFavs? <Loading/>:
            <Fragment>
            <Typography fontSize={24} color='#3b5998'>Favorite wallets</Typography>
            <DataTable value={favorites} responsiveLayout="stack">
                <Column field="description" header="Description" sortable></Column>
                <Column field="walletId" header="Wallet" sortable></Column>
                <Column field="status" header="Status" sortable></Column>
                <Column field="eth" header="ETH" sortable></Column>
                <Column field="currency" header={`${currencyContext.currency}`} sortable></Column>
                <Column field='delete' header=""></Column>
                {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column> */}
            </DataTable>
            </Fragment>
            }
        </Grid>
  );
}

export default FavoriteWallets;