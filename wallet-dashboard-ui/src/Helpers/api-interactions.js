import * as axios from 'axios'

//
export const getWallet = async(id) =>{
const response = await axios.get(`http://localhost:5000/wallet/?wallet=${id}`)
return response
}

export const addFavorite = async(wallet, descr)=>{
    try{
        const response = await axios.post(`http://localhost:5000/favorites/add`, 
        {
            ...wallet,
            description:descr
        })
        console.log(response.status)
        // return response
    }catch(err){
        console.log(err.status)
    }
}

export const removeFavorite = async(wallet)=>{
    const response = await axios.delete(`http://localhost:5000/favorites/remove/${wallet.walletId}`)
    return response
}