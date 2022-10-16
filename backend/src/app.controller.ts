import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/token')
  @UseGuards(AuthGuard)
  getToken(): string {
    return this.appService.getHello();
  }

  @Get('/appointment')
  appointment(): string {
    const sms = this.appService.appointment();
    return 'sent';
  }

  @Get('/reminder')
  reminder(): string {
    const sms = this.appService.reminder();
    return 'sent';
  }

  @Get('/review')
  review(): object {
    const classifyReview = this.appService.reviewGenerate();
    return {
      classifyReview
    };
  }
}
