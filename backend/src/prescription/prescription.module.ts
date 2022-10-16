import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';

@Module({
  providers: [PrescriptionService]
})
export class PrescriptionModule {}
