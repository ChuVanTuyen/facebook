import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(registerDto: RegisterDto): Promise<Partial<User>> {
    const { email, password, dateOfBirth, ...rest } = registerDto;

    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Email đã được sử dụng');
    }

    const user = this.userRepository.create({
      email,
      password,
      ...rest,
    });

    if (dateOfBirth) {
      user.dateOfBirth = new Date(dateOfBirth);
    }

    const savedUser = await this.userRepository.save(user);

    const { password: _, ...userWithoutPassword } = savedUser;
    return userWithoutPassword;
  }
}