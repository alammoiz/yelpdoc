import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { DoctorEntity } from "../doctor/doctor.entity";
import { PatientEntity } from "../patient/patient.entity";
import { DoctorTimeSlotEntity } from "../doctor-time-slot/doctor-timeslot.entity";
import { PrescriptionEntity } from "../prescription/prescription.entity";
import { ReviewsEntity } from "../review/reviews.entity";

@Entity({ name: "appointment", synchronize: true })
export class AppointmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symptom: string;

  @Column()
  complain: string;

  @ManyToOne(type => DoctorEntity)
  @JoinColumn()
  doctor: DoctorEntity;

  @ManyToOne(type => PatientEntity)
  @JoinColumn()
  patient: PatientEntity;

  @ManyToOne(type => DoctorTimeSlotEntity, (doctorTimeSot: DoctorTimeSlotEntity) => doctorTimeSot.appointments)
  @JoinColumn()
  timeSlot: DoctorTimeSlotEntity;

  @OneToMany(type => PrescriptionEntity, (prescription: PrescriptionEntity) => prescription.appointment)
  @JoinColumn()
  prescriptions: PrescriptionEntity[];

  @OneToOne(type => ReviewsEntity, {
    eager: true
  })
  @JoinColumn()
  review: ReviewsEntity;
}
