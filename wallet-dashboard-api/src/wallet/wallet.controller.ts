import { Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { ConfigModule } from "@nestjs/config";
import { Wallet } from "src/models/wallet.model";
ConfigModule.forRoot();

@Controller('wallet')

export class WalletController{
    constructor(private walletService : WalletService){}

    @Get('/')
     wallet(@Query() query:any){
        try{
            const walletId = query.wallet;
            const data:any =  this.walletService.getWalletFromApi(walletId)
            console.log(data)
            return data
        }
        catch(err){
            throw err
        }
    }
}