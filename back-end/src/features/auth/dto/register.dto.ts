import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  Matches,
  IsOptional,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Họ không được để trống' })
  firstName: string;

  @IsNotEmpty({ message: 'Tên không được để trống' })
  lastName: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @MinLength(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
    },
  )
  password: string;

  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  gender?: 'male' | 'female';

  @IsOptional()
  dateOfBirth?: string;

  @IsOptional()
  address?: string;
}
