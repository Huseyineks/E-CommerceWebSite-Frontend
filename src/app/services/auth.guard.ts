import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { TokenRequestDTO } from '../models/DTOs/token-request-dto';
import { catchError, of, switchMap } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { RefreshTokenDTO } from '../models/DTOs/refresh-token-dto';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);
  const token = localStorage.getItem('token');

  

  if(token){

    let model : TokenRequestDTO = {
  
      token : token
  }

  return userService.tokenExpired(model).pipe(
  
              
  
              switchMap(() => {

                return of(true);
  
                 
          }),
  
          catchError((error)=>{
  
              if(error?.error?.message === 'Token is expired.'){
  
                  let model : RefreshTokenDTO = {
  
                      token : localStorage.getItem('token'),
                      refreshToken : localStorage.getItem('refreshToken')
                  };
  
                    return userService.refreshToken(model).pipe(
  
                      switchMap((data)=>{
  
                      let response : LoginResponse = data.response;
  
                  
  
                      localStorage.setItem('token',response.jwtToken);
                      localStorage.setItem('refreshToken',response.refreshToken);
  
                     
                      return of(true);
  
                          
                          
  
                      })
  
  
                  )
  
              }
              else {
  
                  
                  router.navigate(['/login']);
                      return of(false);
  
  
              }
            
              
              
  
          })
          
      
      )





  }
  else{

    router.navigate(['/login']);
    return of(false);

  }




  
};
