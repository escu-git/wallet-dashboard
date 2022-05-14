import React,{useEffect, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'

function MainContent() {
  const[walletId, setWalletId]=useState(false);

  const searchHandler = () =>{
    console.log(walletId)
  }

  return (
    <div>
    <SearchBar
      setWalletId={setWalletId}
      walletId={walletId}
      searchHandler={searchHandler}
    />
    </div>
  )
}

export default MainContent