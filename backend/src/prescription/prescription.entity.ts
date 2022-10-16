import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { UserEntity } from "../user/user.entity";
import { AppointmentEntity } from "../appointment/appointment.entity";

@Entity({ name: "prescription", synchronize: true })
export class PrescriptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  medicineName: string;

  @Column()
  from: Date;

  @Column()
  end: Date;

  @Column()
  noOfDosePerDay: number;

  @ManyToOne(type => AppointmentEntity, (appointment: AppointmentEntity) => appointment.prescriptions)
  @JoinColumn()
  appointment: AppointmentEntity;
}
