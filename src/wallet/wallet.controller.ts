import { Controller, Get} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { ConfigModule } from "@nestjs/config";
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
}