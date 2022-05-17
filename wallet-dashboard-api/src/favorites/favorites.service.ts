import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FavoriteWallet, FavoriteDocument } from "src/models/favorites.model";

@Injectable({})
export class FavoritesService{
    constructor(
        @InjectModel('favorite') private readonly favoriteModel: Model<FavoriteDocument>
        ){}
        
     //Getting saved favorites wallets:
     async readSavedWallets(){
         try{
             return this.favoriteModel.find({})
             .then(wallets=>{return wallets})
             .catch(err=>{throw err})
         }
         catch(err){
             throw err
         }
     }

     //Saving a wallet into favorites
    async saveFavWallet(favoriteData : FavoriteWallet):Promise<FavoriteWallet>{
        try{
            const exists = await this.favoriteModel.find({walletId:favoriteData.walletId})
            console.log(exists)
            if(exists.length ===0){
                const newFavorite = new this.favoriteModel(favoriteData);
                return newFavorite.save();
            }
            throw new Error("Wallet already exists in favorites");
        }catch(err){
            throw err
        }
    }   
    
    async deleteFavWallet(favoriteWalletId){
        try{
            const response = await this.favoriteModel.deleteOne(favoriteWalletId)
            return response
            
        }  
        catch(err){
            throw err
        }
    }
}