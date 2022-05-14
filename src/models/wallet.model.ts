import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WalletDocument = Wallet & Document
@Schema({})
export class Wallet{
    @Prop()
    walletId:string;

    @Prop()
    status:number;

    @Prop()
    message:string;

    @Prop()
    eth:number;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);