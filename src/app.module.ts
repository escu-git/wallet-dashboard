import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletController } from './wallet/wallet.controller';
import { WalletModule } from './wallet/wallet.module';
import { WalletService } from './wallet/wallet.service';
import { ConfigModule } from "@nestjs/config";
ConfigModule.forRoot();
const user = process.env.MONGO_USER;
const password = process.env.MONGO_SECRET;

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${user}:${password}@cluster0.zu7ov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    WalletModule,
  ],
  controllers:[
    WalletController
  ],
  providers:[
    WalletService
  ]
})
export class AppModule {}
