import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { TokenRequestDTO } from '../models/DTOs/token-request-dto';
import { catchError, of, switchMap } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { RefreshTokenDTO } from '../models/DTOs/refresh-token-dto';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
 


  return userService.isLoginRequired();



  
};