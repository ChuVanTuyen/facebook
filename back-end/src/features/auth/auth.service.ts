import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<Partial<User>> {
    const savedUser = await this.userService.create(registerDto);
    const { password: _, ...userWithoutPassword } = savedUser;

    return userWithoutPassword;
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email, [
      'id',
      'email',
      'password',
    ]);
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
