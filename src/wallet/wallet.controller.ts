import { Body, Controller, Get, Post} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { ConfigModule } from "@nestjs/config";
import { Wallet } from "src/models/wallet.model";
ConfigModule.forRoot();

@Controller('wallet')

export class WalletController{
    constructor(private walletService : WalletService){}

    @Get('getwallet')
    wallet(){
        let key:string=process.env.API_KEY
        const data:string = this.walletService.getWallet(key)
        return data
    }

    @Post('save-wallet')
        saveToFavs(@Body() walletDto:Wallet){
            return this.walletService.saveWallet(walletDto)
        }

}