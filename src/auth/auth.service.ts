import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import * as argon from 'argon2';
import * as bcrypt from 'bcrypt';
import { SigninDto, SignupDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) { }

  async signup(dto: SignupDto) {
    console.log('dto', dto);

    const hash = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          firstName: dto.firstName,
          lastName: dto.lastName,
          hash,
        },
      });
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') { throw new ForbiddenException('Email already in use'); }
      throw error;
    }
  }

  async signin(dto: SigninDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email, }, });
    if (!user) { throw new ForbiddenException('Invalid credentials'); }

    const pwMatches = await bcrypt.compare(dto.password, user.hash);
    if (!pwMatches) { throw new ForbiddenException('Invalid credentials'); }
    return this.signToken(user.id, user.email, user.firstName, user.lastName);
  }

  async signToken(userId: number, email: string, firstName?: string, lastName?: string): Promise<{ access_token: string }> {
    let payload = {};
    if (firstName && lastName) { payload = { sub: userId, email, firstName, lastName, }; } else { payload = { sub: userId, email }; }
    const token = await this.jwt.signAsync(payload, { expiresIn: '2h', secret: this.config.get('JWT_SECRET') });
    return { access_token: token };
  }
}
