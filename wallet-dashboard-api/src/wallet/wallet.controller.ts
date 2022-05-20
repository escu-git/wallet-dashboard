import { Controller, Get,Query} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { ConfigModule } from "@nestjs/config";
ConfigModule.forRoot();

@Controller('wallet')

export class WalletController{
    constructor(private walletService : WalletService){}

    @Get('/')
     wallet(@Query() query:any){
        try{
            const walletId = query.wallet;
            const data:any =  this.walletService.getWalletFromApi(walletId)
            return data
        }
        catch(err){
            throw err
        }
    }
    @Get('/isOld')
        isOld(@Query() query:any){
            try{
                const walletId = query.wallet;
                const data:any =  this.walletService.isOld(walletId)
                console.log(data)
                return data
            }catch(err){
                throw err
            }
        }
}