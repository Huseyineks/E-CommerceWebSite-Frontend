import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { UserDTO } from '../models/DTOs/user-dto';
import { environment } from 'src/environments/environment.development';
import { RefreshTokenDTO } from '../models/DTOs/refresh-token-dto';
import { TokenRequestDTO } from '../models/DTOs/token-request-dto';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response';
import { UpdateUserDTO } from '../models/DTOs/updateUser-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient,private router : Router) {

    this.isTokenValid.set(localStorage.getItem('login') ? '1' : '0')


   }

  private apiUrl = environment.apiUrl;
  
  isTokenValid = signal('0');
  
   

  register(userDTO : UserDTO) : Observable<void>{


    return this.http.post<void>(this.apiUrl + '/api/Auth/api/register',userDTO);
    
  }

  login(userDTO : UserDTO) : Observable<any>{


    return this.http.post<any>(this.apiUrl + '/api/Auth/api/login',userDTO,{withCredentials : true});
  }

  tokenExpired() : Observable<any>{

    return this.http.get<any>(this.apiUrl + '/api/Auth/api/tokenExpired',{withCredentials : true});
  }

  refreshToken() : Observable<any>{

    return this.http.get<any>(this.apiUrl + '/api/Auth/api/refreshToken',{withCredentials : true});


  }

  logout() : Observable<any>{

    
    return this.http.get<any>(this.apiUrl + '/api/Auth/api/logout',{withCredentials : true})
  }





  isLoginRequired() : Observable<any>{

    
  
    return this.tokenExpired().pipe(
    
                
    
                switchMap(() => {
  
                  return of(true);
    
                   
            }),
    
            catchError((error)=>{
    
                if(error?.error?.message === 'Token is expired.'){
    
                    
    
                      return this.refreshToken().pipe(
    
                        switchMap(()=>{
    
                        
                       
                        return of(true);
    
                            
                            
    
                        }),
                        catchError(err => {
                          
                          console.error(err);
                          this.router.navigate(['/login']);
                          return of(false);
                        })
    
    
                    )
    
                }
                else {
    
                    
                    this.router.navigate(['/login']);
                        return of(false);
    
    
                }
              
                
                
    
            })
            
        
        )
  
  
  
  
  
    
    
  
      
  
    
  
         
    
  }

  isAdmin() : Observable<boolean>{


    return this.http.get<boolean>(this.apiUrl + '/api/Auth/api/isAdmin',{withCredentials : true})
  }

  getAllUsers() : Observable<UserDTO[]>{

    return this.http.get<UserDTO[]>(this.apiUrl + '/api/User/api/users');
  }

  getUser() : Observable<any>{

    return this.http.get<any>(this.apiUrl + '/api/User/api/getUser',{withCredentials : true});
  }

   updateUserProfile(userDTO : UpdateUserDTO) : Observable<any>{

    return this.http.put<any>(this.apiUrl + '/api/User/api/updateUserProfile',userDTO,{withCredentials : true});
  }

  updateUserPassword(userDTO : UpdateUserDTO) : Observable<any>{

    return this.http.put<any>(this.apiUrl + '/api/User/api/updateUserPassword',userDTO,{withCredentials : true});
  }
}
