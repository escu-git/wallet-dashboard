import { Injectable } from "@nestjs/common";
import { Wallet, WalletDocument } from "src/models/wallet.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable({})

export class WalletService{
    constructor(
        @InjectModel('wallet') private readonly walletModel : Model<WalletDocument>
    ){}

    getWallet(wallet:string){
        return wallet
    }

    //Saving a wallet into favorites
    async saveWallet(walletData:Wallet) :Promise<Wallet>{
        const newWallet = new this.walletModel(walletData);
        return newWallet.save();
    }
}