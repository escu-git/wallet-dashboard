import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CurrencyDocument = Currency & Document
@Schema({})

export class Currency{
    @Prop()
    name:string;

    @Prop()
    exchangeValue:number;    
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
