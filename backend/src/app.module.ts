import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DoctorTimeSlotModule } from './doctor-time-slot/doctor-time-slot.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { ReviewModule } from './review/review.module';
import { TwilioModule } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('COCKROACHDBURI'),
        ssl: true,
        entities: [],
        //entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
        migrations: ['migrations/*.ts'],
      }),
    }),

    UserModule,
    DoctorModule,
    PatientModule,
    AuthModule,
    ConfigModule.forRoot({}),
    DoctorTimeSlotModule,
    AppointmentModule,
    PrescriptionModule,
    ReviewModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
