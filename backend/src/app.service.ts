import { Get, Injectable } from '@nestjs/common';
import { NotificationService } from './notification/notification.service';
import { ReviewService } from './review/review.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private notificationService: NotificationService,
              private reviewService: ReviewService,
              private configService: ConfigService) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async appointment() {
    return await this.notificationService.sendSMS(
      this.configService.get('FROM_TWILLO'),
      this.configService.get('TO_TWILLO'), // TODO: this will be chabge from DB
      'Hi Max, Your appointment has been scheduled to Dr. John at 16 Oct @04:00PM');
  }

  async reminder() {
    return await this.notificationService.sendSMS(
      this.configService.get('FROM_TWILLO'),
      this.configService.get('TO_TWILLO'), // TODO: this will be change from DB
      'Hi Max, You need to take medicine(Paracetamol), 2 tablet after 5 min');
  }

  async reviewClassify(text: string) {
    const classify = await this.reviewService.classify(text);
    console.log('Classify --------------------->', classify.body.classifications[0].prediction);
    return classify.body.classifications[0].prediction;
  }

  async reviewGenerate() {
    const review = 'I wouldn\'t recmded '; // TODO: this will be change in review entry
    console.log('Input---------------------->', review);
    const generator = await this.reviewService.generate(review);
    const text = generator.body.generations[0].text;
    console.log('Generator ------------------->', text);
    const classify = this.reviewClassify(text);
    return generator?.body?.generations.text || '';
  }
}
