import React, { Fragment } from 'react'
import ethIcon from '../../assets/eth.png'
import styled from 'styled-components';

function Loading() {

   
  return (
    <Fragment>
        <Spinner src={ethIcon}/>
    </Fragment>
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