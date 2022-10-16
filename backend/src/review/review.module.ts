import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({}),
  ],
  providers: [ReviewService, ConfigService],
  exports: [ReviewService],
})
export class ReviewModule {
}
