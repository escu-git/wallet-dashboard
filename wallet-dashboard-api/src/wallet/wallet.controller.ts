import { Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { ConfigModule } from "@nestjs/config";
import { Wallet } from "src/models/wallet.model";
ConfigModule.forRoot();

@Controller('wallet')

export class WalletController{
    constructor(private walletService : WalletService){}

    @Get('get-wallet')
    wallet(@Query() query:any){
        try{
            const walletId = query.wallet;
            const data:any = this.walletService.getWalletFromApi(walletId)
            return data
        }
        catch(err){
            throw err
        }
    }
}