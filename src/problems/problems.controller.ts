import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/authentication/admin.guard';
import { TenantGuard } from 'src/authentication/tenant.guard';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService, private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, TenantGuard)
  @Post()
  async create(@Request() req: any, @Body() createProblemDto: CreateProblemDto) {
    // find logged in tenant...
    console.log("create problem controller - user", req.user);
    
    createProblemDto.tenant = (await this.usersService.findOne(req.user.username)).tenant;
    
    console.log("saving this", createProblemDto);

    return this.problemsService.create(createProblemDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, AdminGuard)
  findAll(@Request() req: any) {
    console.log("user in controller", req.user);
    
    return this.problemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.problemsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProblemDto: UpdateProblemDto) {
  //   return this.problemsService.update(+id, updateProblemDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.problemsService.remove(+id);
  }
}
