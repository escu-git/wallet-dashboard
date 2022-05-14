import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { FavoriteWallet } from "src/models/favorites.model";
import { Wallet } from "src/models/wallet.model";
import { FavoritesService } from "./favorites.service";

@Controller('favorites')
export class FavoritesController{
    constructor(private favoritesService : FavoritesService){}

    //Getting saved favorites wallets:
    @Get('favorites')
    favWallets(){
        console.log('entro')
        return this.favoritesService.readSavedWallets()
    }

    //Saving wallets into favorites:
    @Post('save-fav')
    saveToFavs(@Body() favoriteDto:FavoriteWallet){
        return this.favoritesService.saveFavWallet(favoriteDto)
    }

    @Delete('delete-fav')
    deleteFromFav(){
        return this.favoritesService.deleteFavWallet
    }
}