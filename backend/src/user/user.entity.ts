import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { PatientEntity } from "../patient/patient.entity";
import { DoctorEntity } from "../doctor/doctor.entity";

@Entity({ name: "user", synchronize: true })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => PatientEntity, (patient: PatientEntity) => patient.user)
  public patient: PatientEntity;

  @OneToOne(() => DoctorEntity, (doctor: DoctorEntity) => doctor.user)
  public doctor: DoctorEntity;
}
