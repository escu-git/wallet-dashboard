import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FavoriteWallet, FavoriteDocument } from "src/models/favorites.model";
import { Wallet } from "src/models/wallet.model";

@Injectable({})
export class FavoritesService{
    constructor(
        @InjectModel('favorite') private readonly favoriteModel: Model<FavoriteDocument>
        ){}
        
     //Getting saved favorites wallets:
     async readSavedWallets(){
        return this.favoriteModel.find({})
        .then(wallets=>{return wallets})
        .catch(err=>{throw err})
     }

     //Saving a wallet into favorites
    async saveFavWallet(favoriteData : FavoriteWallet) :Promise<FavoriteWallet>{
        const newFavorite = new this.favoriteModel(favoriteData);
        return newFavorite.save();
    }
    
    async deleteFavWallet(favoriteWalletId){
    }
}