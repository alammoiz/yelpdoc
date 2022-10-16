import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { AppointmentEntity } from '../appointment/appointment.entity';

@Entity({ name: 'patient', synchronize: true })
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  age: number;

  @Column()
  phoneNumber: string;

  @Column()
  lat: number;

  @Column()
  long: number;

  @OneToOne(type => UserEntity, {
    eager: true,
  })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(type => AppointmentEntity, (appointment: AppointmentEntity) => appointment.patient)
  @JoinColumn()
  appointments: AppointmentEntity[];
}
