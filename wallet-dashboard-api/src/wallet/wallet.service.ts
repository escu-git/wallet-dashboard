import { Injectable } from "@nestjs/common";
import { WalletDocument } from "src/models/wallet.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { map } from "rxjs";
import { FavoriteDocument } from "src/models/favorites.model";
var Web3 = require('web3');
ConfigModule.forRoot();

@Injectable({})

export class WalletService{
    constructor(
        @InjectModel('wallet') private readonly walletModel : Model<WalletDocument>,
        @InjectModel('favorite') private readonly favoriteModel: Model<FavoriteDocument>,
        private httpService : HttpService
    ){}

    getWalletFromApi(walletId:string){
        const resolve = this.httpService.get(`https://api.etherscan.io/api?module=account&action=balance&address=${walletId}&tag=latest&apikey=${process.env.ETHERSCAN_API_KEY}`
        ).pipe(
            map(async(response) => {
                const isFavorite = async()=>{
                    const fav = await this.favoriteModel.find({walletId:walletId})
                    const response = fav.length ==0? false:true;
                    return response
                }
                const wei =  response.data.result;
                const fromWei= Web3.utils.fromWei(wei, 'ether')
                return {
                walletId,
                eth:fromWei,
                status:response.data.status,
                message:response.data.message,
                isFavorite: await isFavorite(),
            }})
        )
        return resolve
    }

    isOld(walletId:string){
        try{
            const response:any = this.httpService.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${walletId}&page=1&sort=asc&apikey=NSZCD6S4TKVWRS13PMQFMVTNP6H7NAGHUY`)
            .pipe(map(async(res)=>{
                const date = res.data.result[0].timeStamp
                const firstOperation:any = new Date(date * 1000);
                const today:any = new Date();
                const diffTime = Math.abs(firstOperation - today);
                const diffDays = Math.ceil(diffTime/(1000*60*60*24))
                if(diffDays >= 365){
                    return true
                }
                return false
            }))
            return response
        }catch(err){
            throw err
        }
    }
}