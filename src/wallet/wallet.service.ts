import { Injectable } from "@nestjs/common";

@Injectable({})

export class WalletService{
    getWallet(wallet:string){
        return wallet
    }
}