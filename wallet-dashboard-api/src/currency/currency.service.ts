import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CurrencyDocument } from "src/models/currency.model";

@Injectable({})
export class CurrencyService{
    constructor(
        @InjectModel('currency') private readonly currencyModel : Model<CurrencyDocument>
    ){}

    
}