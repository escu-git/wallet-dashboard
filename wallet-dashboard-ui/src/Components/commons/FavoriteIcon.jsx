import React, { Fragment } from 'react'

function FavoriteIcon({manageFavorite, icon}) {
    let color = 'green'
  return (
    <Fragment>
        <i className={icon} style={{color:{color}, fontSize:30}}
        onClick={()=>manageFavorite()}
        ></i>
    </Fragment>
  )
}

export default FavoriteIcon