import {
  Controller,
  Post,
  UseGuards,
  Request as Request2,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request2() req) {
    return this.authService.login(req.user);
  }
  
  @Post('auth/signup')
  async signup(@Request2() req) {
    console.log("body", req.body);
    
    return this.authService.signup(req.body);
  }

  @Post('auth/signup-tenant')
  async signup_tenant(@Request2() req) {
    console.log("body", req.body);
    
    return this.authService.signup_tenant(req.body);
  }
  @Post('auth/signup-boardmember')
  async signup_boardmember(@Request2() req) {
    console.log("body", req.body);
    
    return this.authService.signup_board_member(req.body);
  }
}
