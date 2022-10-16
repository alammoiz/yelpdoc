import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { DoctorEntity } from "../doctor/doctor.entity";
import { AppointmentEntity } from "../appointment/appointment.entity";

@Entity({ name: "doctor-timeslot", synchronize: true })
export class DoctorTimeSlotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: number; // 0 , 1...,6 0= sunday

  @Column()
  timeSlotStart: string;

  @Column()
  timeSlotEnd: string;

  @ManyToOne(type => DoctorEntity, (doctor: DoctorEntity) => doctor.timeSlots)
  @JoinColumn()
  doctor: DoctorEntity;

  @OneToMany(type => AppointmentEntity, (appointment: AppointmentEntity) => appointment.timeSlot)
  @JoinColumn()
  appointments: AppointmentEntity[];
}
