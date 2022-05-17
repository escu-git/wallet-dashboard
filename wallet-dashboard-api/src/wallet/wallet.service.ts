import { Injectable } from "@nestjs/common";
import { WalletDocument } from "src/models/wallet.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { map } from "rxjs";
import { FavoriteDocument } from "src/models/favorites.model";
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
                const eth = response.data.result;
                return {
                walletId,
                eth,
                status:response.data.status,
                message:response.data.message,
                isFavorite: await isFavorite(),
                isOld:false
            }})
        )
        return resolve
    }

    
}