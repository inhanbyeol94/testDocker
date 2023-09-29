import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
    //TEST
  }

  getTest(): string {
    return '박제이 사랑해!';
  }
}
