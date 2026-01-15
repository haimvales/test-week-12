import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDto } from './create-purchase.dto';

export class Rpurchase extends PartialType(CreatePurchaseDto) {
    id:number
    newQuantity:number
    spent:number
}
