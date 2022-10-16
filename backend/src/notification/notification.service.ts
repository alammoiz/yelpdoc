import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';


@Injectable()
export class NotificationService {
  constructor(private readonly twilioService: TwilioService) {

  }

  async sendSMS(from, to, body) {
    return this.twilioService.client.messages.create({
      body,
      from,
      to,
    });
  }
}
