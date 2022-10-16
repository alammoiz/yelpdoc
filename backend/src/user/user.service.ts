import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {
  }

  async findOne(email: string): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
      relations: ['doctor', 'patient']
    });
  }

  async findOneById(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneBy({id});
  }

  // async create(user: CreateUserDto): Promise<UserEntity> {
  //   const newUser = this.usersRepository.create(user);
  //   return await this.usersRepository.save(newUser);
  // }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
