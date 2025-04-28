import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { TokenRequestDTO } from '../models/DTOs/token-request-dto';
import { catchError, map, of, switchMap } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { RefreshTokenDTO } from '../models/DTOs/refresh-token-dto';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
 
  const url : string = state.url;

  // userService.isLoginRequired().subscribe(value => {
  //   if(value){
  //     if(!(url.includes('admin'))){
  //       return of(true);
  //     }else{

  //       return userService.isAdmin().subscribe(value => {

  //         if(value){

  //           return of(true);
  //         }
  //         else{

  //           return of(false);
  //         }


  //       })
  //     }
  //   }
    
  //     return of(false);
    
  // })

  return userService.isLoginRequired().pipe(
    switchMap(value => {

      if(value){

        if(!(url.includes('admin'))){

          return of(true);
        }
        else{

          return userService.isAdmin().pipe(
            map(isAdmin => isAdmin)
          )

        }
        

      }
      else{

        return of(false);
      }

      

    }
     
    )
  )

 
   
};