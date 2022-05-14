import { Injectable } from "@nestjs/common";
import { Wallet, WalletDocument } from "src/models/wallet.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import axios from "axios";
import { HttpService } from "@nestjs/axios";
import { map } from "rxjs";
ConfigModule.forRoot();

@Injectable({})

export class WalletService{
    constructor(
        @InjectModel('wallet') private readonly walletModel : Model<WalletDocument>, 
        private httpService : HttpService
    ){}

    getWalletFromApi(walletId:string){
        const resolve = this.httpService.get(`https://api.etherscan.io/api?module=account&action=balance&address=${walletId}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`
        ).pipe(
            map(response => response.data)
          )
        return resolve
    }

    //Saving a wallet into favorites
    async saveWallet(walletData:Wallet) :Promise<Wallet>{
        const newWallet = new this.walletModel(walletData);
        return newWallet.save();
    }

    //Getting saved favorites wallets:
    async readSavedWallets(){
       return this.walletModel.find({})
       .then(wallets=>{return wallets})
       .catch(err=>{throw err})
    }
}