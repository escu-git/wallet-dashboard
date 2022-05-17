import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FavoriteDocument = FavoriteWallet & Document
@Schema({})

export class FavoriteWallet{
    @Prop()
    walletId:string;

    @Prop()
    description:string;
    
    @Prop()
    date:Date;
}

export const FavoriteWalletSchema = SchemaFactory.createForClass(FavoriteWallet);