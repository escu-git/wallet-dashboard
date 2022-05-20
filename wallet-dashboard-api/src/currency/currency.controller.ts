import { Controller, Get } from "@nestjs/common";
import { json } from "stream/consumers";
import { CurrencyService } from "./currency.service";

@Controller('currency')
export class CurrencyController{
    constructor(private currencyService : CurrencyService){}

    @Get('/dollar')
    getDollar(){
        try{
            const dollar:any = this.currencyService.getDollarExchange()
           
            return dollar;
        }catch(err){
            throw err
        }
        }
    @Get('/euro')
    getEuro()
    {
        try{
            const euro:any = this.currencyService.getEuroExchange()

            return euro
        }
        catch(err){
            throw err
        }
    }
    
}
