import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletController } from './wallet/wallet.controller';
import { WalletModule } from './wallet/wallet.module';
import { WalletService } from './wallet/wallet.service';
import { ConfigModule } from "@nestjs/config";
import { WalletSchema } from './models/wallet.model';
import { HttpModule } from '@nestjs/axios';
import { FavoritesModule } from './favorites/favorites.module';
import { FavoriteWalletSchema } from './models/favorites.model';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesService } from './favorites/favorites.service';
import { CurrencyModule } from './currency/currency.module';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyService } from './currency/currency.service';
import { CurrencySchema } from './models/currency.model';
ConfigModule.forRoot();
const user = process.env.MONGO_USER;
const password = process.env.MONGO_SECRET;

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${user}:${password}@walletdashboard.zu7ov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    MongooseModule.forFeature([{name:'wallet',schema:WalletSchema}]),
    MongooseModule.forFeature([{name:'favorite',schema:FavoriteWalletSchema}]),
    MongooseModule.forFeature([{name:'currency', schema:CurrencySchema}]),
    HttpModule,
    WalletModule,
    FavoritesModule,
    CurrencyModule,
  ],
  controllers:[
    WalletController,
    FavoritesController,
    CurrencyController,
  ],
  providers:[
    WalletService,
    FavoritesService,
    CurrencyService,
  ]
})
export class AppModule {}
