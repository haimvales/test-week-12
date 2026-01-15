import { Injectable } from '@nestjs/common';
// import fs from 'fs.promises';
const fs = require('fs');

@Injectable()
export class AppService  {
  getHello(): string {
    return 'Hello World!';
  }


}





