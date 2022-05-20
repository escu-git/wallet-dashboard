import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { HttpService } from "@nestjs/axios";
import { Model } from "mongoose";
import { ConfigModule } from "@nestjs/config";
import { CurrencyDocument } from "src/models/currency.model";
import { map } from "rxjs";
ConfigModule.forRoot();


@Injectable({})
export class CurrencyService{
    constructor(
        @InjectModel('currency') private readonly currencyModel : Model<CurrencyDocument>,
        private httpService : HttpService
    ){}

    async getDollarExchange(){
       const dollar = await this.httpService.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API_KEY}`)
       .pipe(map(async(res)=>{return res.data}));
        return dollar
    }

    async getEuroExchange(){
        const euro =  await this.httpService.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur`).pipe(
        map(async(res)=>{return res.data}))
        return euro
    }
}