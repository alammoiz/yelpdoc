import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TwilioModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        accountSid: config.get('TWILIO_ACCOUNT_SID'),
        authToken: config.get('TWILIO_AUTH_TOKEN'),
      }),
    }),
  ],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {
}
