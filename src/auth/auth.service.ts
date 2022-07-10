import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import * as argon from 'argon2';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) { }

  async signup(dto: AuthDto) {
    // const hash = await argon.hash(dto.password);
    const hash = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.prisma.user.create({ data: { email: dto.email, hash, }, });
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') { throw new ForbiddenException('Email already in use'); }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email, }, });
    if (!user) { throw new ForbiddenException('Invalid credentials'); }

    // const pwMatches = await argon.verify(user.hash, dto.password);
    const pwMatches = await bcrypt.compare(dto.password, user.hash);
    if (!pwMatches) { throw new ForbiddenException('Invalid credentials'); }
    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const token = await this.jwt.signAsync(payload, { expiresIn: '2h', secret: this.config.get('JWT_SECRET') });
    return { access_token: token };
  }
}
