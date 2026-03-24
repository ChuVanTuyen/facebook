import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from '../auth/dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findByEmail(email: string, select?: (keyof User)[]) {
    return this.userRepo.findOne({
      where: { email },
      ...(select ? { select } : {}),
    });
  }

  async create(registerDto: RegisterDto) {
    const { email, password, dateOfBirth, ...rest } = registerDto;

    const existingUser = await this.userRepo.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('Email đã được sử dụng');
    }

    const user = this.userRepo.create({
      email,
      password,
      ...rest,
    });

    if (dateOfBirth) {
      user.dateOfBirth = new Date(dateOfBirth);
    }

    const savedUser = await this.userRepo.save(user);
    return savedUser;
  }
}
