import React,{useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { removeFavorite } from '../../Helpers/api-interactions';

function FavoriteWallets({favoriteList, isExchange}) {
    useEffect(()=>{

    },[])
  return (
    <Grid item container lg={10} style={{display:'flex', justifyContent:'center', margin:'200px auto'}}>
        <TableContainer component={Paper} style={{maxWidth:'80%'}}>
            <Table sx={{ minWidth: 500 }} size="small">
            <TableHead>
                <TableRow>
                <TableCell>Wallet description</TableCell>
                <TableCell>Wallet</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">ETH</TableCell>
                <TableCell align="right">Old?</TableCell>
                <TableCell align="right"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {favoriteList?.map((fav) => (
                <TableRow
                    key={fav.walletId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="right">{fav.description}</TableCell>
                    <TableCell component="th" scope="row">{fav.walletId}</TableCell>
                    <TableCell align="right">{fav.status}</TableCell>
                    <TableCell align="right">{fav.eth}</TableCell>
                    <TableCell align="right">{isExchange}</TableCell>
                    <TableCell align="right">Old</TableCell>
                    <TableCell>
                    <i className="fa-solid fa-trash" style={{color:'red', fontSize:18}} onClick={()=>removeFavorite(fav.walletId)}></i>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </Grid>
  );
}

export default FavoriteWallets;