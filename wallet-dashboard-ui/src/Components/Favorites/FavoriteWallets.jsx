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
import { useMediaQuery, useTheme } from '@mui/material';



function FavoriteWallets({favoriteList, updatedFavorites, setUpdatedFavorites, loadingFavs}) {
    const currencyContext = useCurrency()
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const styledColumn = ({
        display:'flex',
        flexDirection: 'column',
        color:'red'
    })

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
            const remove = await removeFavorite(wallet);
            if(remove){
                setUpdatedFavorites(!updatedFavorites)
            }
        }catch(err){
            throw err
        }
    }

    return (
        <Grid item  style={{
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center', 
                margin:'150px auto', 
                width: smallScreen? '75%':'90%'
            }}>
            {loadingFavs? <Loading/>:
            <Fragment>
            <Typography fontSize={24} color='#3b5998' >Favorite wallets</Typography>
            <DataTable value={favorites} responsiveLayout="stack" style={{styledColumn}} >
                <Column field="description" header="Description" sortable style={{styledColumn}}></Column>
                <Column field="walletId" header="Wallet" sortable style={{styledColumn}}></Column>
                <Column field="status" header="Status" sortable style={{styledColumn}}></Column>
                <Column field="eth" header="ETH" sortable style={{styledColumn}}></Column>
                <Column field="currency" header={`${currencyContext.currency}`} sortable style={{styledColumn}}></Column>
                <Column field='delete' header="" style={{styledColumn}}></Column>
            </DataTable>
            </Fragment>
            }
        </Grid>
  );
}

export default FavoriteWallets;