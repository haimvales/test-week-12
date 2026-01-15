import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { Rpurchase } from './dto/return-purchase.dto';
const fs = require('fs');

@Injectable()
export class PurchaseService {
    async onModuleInit(): Promise<void> {
      try {
  let budget = fs.readFileSync('budget.txt', 'utf8');
  budget = Number(budget)
  console.log('budget:', budget);
  } catch (err) {
  console.error('Error reading file:', err);
  }
  } 

  async create(createPurchaseDto :CreatePurchaseDto[]) {
      try {
  let dataString = await fs.readFileSync('budget.json', 'utf8');
  let data = await JSON.parse(dataString)

  let budget = 0
        try {
  budget = fs.readFileSync('budget.txt', 'utf8');
  budget = Number(budget)
  console.log('File content:', budget);
  } catch (err) {
  console.error('Error reading file:', err);
  }

  let results:Rpurchase[] = []
  let sum = 0
  createPurchaseDto.forEach(element => {
    let flag = true
    results.push({id:element.id,newQuantity:element.quantity,spent:element.quantity*element.pricePerUnit})
    sum += element.quantity*element.pricePerUnit
    data.forEach(value => {
      if(value.id === element.id && flag){
        value.quantity += element.quantity
        flag = false
      }
    });
    if(flag){
      data.push(element)
    }
  });

  if(budget - sum < 0){
    throw new UnauthorizedException('no budget');
  }
  budget = budget - sum;
  let budgetString = String(budget)
  

  let json = JSON.stringify(data, null, 2);
  console.log(json)
  await fs.writeFileSync('budget.json', json, 'utf8');
  await fs.writeFileSync('budget.txt', budgetString, 'utf8');
        return {
          results
        }
  } catch (err) {
  console.error('Error reading file:', err);
  }
  }
}
