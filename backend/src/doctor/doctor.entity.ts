import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { DoctorTimeSlotEntity } from '../doctor-time-slot/doctor-timeslot.entity';
import { AppointmentEntity } from '../appointment/appointment.entity';

@Entity({ name: 'doctor', synchronize: true })
export class DoctorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  qualification: string;

  @Column()
  phoneNumber: string;

  @Column()
  experience: string;

  @Column()
  speciality: string;

  @Column()
  address: string;

  @Column()
  lat: number;

  @Column()
  long: number;

  @OneToOne(type => UserEntity, {
    eager: true,
  })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(type => DoctorTimeSlotEntity, (timeSlot: DoctorTimeSlotEntity) => timeSlot.doctor, {
    eager: true,
  })
  @JoinColumn()
  timeSlots: DoctorTimeSlotEntity[];

  @OneToMany(type => AppointmentEntity, (appointment: AppointmentEntity) => appointment.doctor)
  @JoinColumn()
  appointments: AppointmentEntity[];
}
