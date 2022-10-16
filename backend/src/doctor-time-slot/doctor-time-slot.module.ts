import { Module } from '@nestjs/common';
import { DoctorTimeSlotService } from './doctor-time-slot.service';

@Module({
  providers: [DoctorTimeSlotService]
})
export class DoctorTimeSlotModule {}
