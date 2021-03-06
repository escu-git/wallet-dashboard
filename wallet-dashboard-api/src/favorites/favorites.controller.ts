import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { FavoriteWallet } from "src/models/favorites.model";
import { FavoritesService } from "./favorites.service";

@Controller('favorites')

export class FavoritesController{
    constructor(private favoritesService : FavoritesService){}

    //Getting saved favorites wallets:
    @Get('/')
    favWallets(){
        try{
            return this.favoritesService.readSavedWallets()
        }catch(err){
            throw err
        }
    }

    //Saving wallets into favorites:
    @Post('add')
    saveToFavs(@Body() favoriteDto:FavoriteWallet){
        return this.favoritesService.saveFavWallet(favoriteDto)
    }

    @Delete('remove/')
    deleteFromFav(@Query() query:any){  
        try{
            const wallet = query.wallet
            return this.favoritesService.deleteFavWallet(wallet)
        }catch(err){
            throw err
        }

    }
}