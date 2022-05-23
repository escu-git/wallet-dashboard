import * as axios from 'axios'

//
export const getWallet = async(id) =>{
const response = await axios.get(`${import.meta.env.VITE_API_DOMAIN}/wallet/?wallet=${id}`)
return response
}

export const isOld = async(id)=>{
    const response = await axios.get(`${import.meta.env.VITE_API_DOMAIN}/wallet/isOld/?wallet=${id}`)
    return response
}

export const addFavorite = async(wallet, descr)=>{
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_DOMAIN}/favorites/add`, 
        {
            ...wallet,
            description:descr
        })
        // return response
    }catch(err){
        throw err
    }
}

export const removeFavorite = async(wallet)=>{
    const response = await axios.delete(`${import.meta.env.VITE_API_DOMAIN}/favorites/remove/?wallet=${wallet}`)
    return response
}
