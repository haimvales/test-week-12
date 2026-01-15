import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { Rpurchase } from './dto/return-purchase.dto';

@Controller('transactions')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post("purchase")
  create(@Body() createPurchaseDto: CreatePurchaseDto[]) {
    return this.purchaseService.create(createPurchaseDto);
  }

}
