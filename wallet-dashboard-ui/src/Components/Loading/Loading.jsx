import React from 'react'
import ethIcon from '../../assets/eth.png'
import styled from 'styled-components';
import { Grid } from '@mui/material';

function Loading() {

   
  return (
    <Grid item style={{display:'flex', justifyContent:'center'}}>
        <Spinner src={ethIcon}/>
    </Grid>
  )
}

const Spinner = styled.img`

width: 100px;
height: 100px;
border: 10px solid #f3f3f3; /* Light grey */
border-top: 10px solid #383636; /* Black */
border-radius: 50%;
animation: spinner 1.5s linear infinite;
margin-top:150px;

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`

export default Loading