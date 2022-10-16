import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { DoctorTimeSlotEntity } from '../doctor-time-slot/doctor-timeslot.entity';
import { AppointmentEntity } from '../appointment/appointment.entity';
import { DoctorEntity } from '../doctor/doctor.entity';

@Entity({ name: 'reviews', synchronize: true })
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  rating: number;

  @Column()
  feedback: string;

  @OneToOne(() => AppointmentEntity, (appointment: AppointmentEntity) => appointment.review)
  appointment: AppointmentEntity;
}
