import { Controller, Post, Body, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Get('register')
  async test(@Body() registerDto: RegisterDto) {
    // return this.authService.register(registerDto);
    return 'ok';
  }


}