import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorEntity } from './doctor.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorRepository: Repository<DoctorEntity>,
  ) {
  }

  async find(): Promise<DoctorEntity[]> {
    return this.doctorRepository.find();
  }

  async findOneById(id: number): Promise<DoctorEntity> {
    return this.doctorRepository.findOneBy({id});
  }

  // async create(user: CreateUserDto): Promise<UserEntity> {
  //   const newUser = this.usersRepository.create(user);
  //   return await this.usersRepository.save(newUser);
  // }

  async remove(id: string): Promise<void> {
    await this.doctorRepository.delete(id);
  }
}
