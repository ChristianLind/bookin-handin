import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './entities/problem.entity';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/authentication/entities/user';
import { Tenant } from 'src/authentication/entities/tenant';
import { AuthModule } from 'src/authentication/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Problem, UserEntity, Tenant]), AuthModule],
  controllers: [ProblemsController],
  providers: [ProblemsService, UsersService]
})
export class ProblemsModule {}
