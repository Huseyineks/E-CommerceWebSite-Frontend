import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { UserDTO } from '../models/DTOs/user-dto';
import { environment } from 'src/environments/environment.development';
import { RefreshTokenDTO } from '../models/DTOs/refresh-token-dto';
import { TokenRequestDTO } from '../models/DTOs/token-request-dto';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient,private router : Router) {

    this.isTokenValid.set(localStorage.getItem('token') ? '1' : '0')


   }

  private apiUrl = environment.apiUrl;

  flag : string = '';
  
  isTokenValid = signal('0');
  
   

  register(userDTO : UserDTO) : Observable<void>{


    return this.http.post<void>(this.apiUrl + '/api/Auth/api/register',userDTO);
    
  }

  login(userDTO : UserDTO) : Observable<any>{


    return this.http.post<any>(this.apiUrl + '/api/Auth/api/login',userDTO);
  }

  tokenExpired(model : TokenRequestDTO) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Auth/api/tokenExpired',model);
  }

  refreshToken(model : RefreshTokenDTO) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Auth/api/refreshToken',model);


  }

  getUserId(token : string) : string{

    const payload = JSON.parse(atob(token.split('.')[1]));

    const userId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    return userId;
  }

  getToken() : string {

    const token = localStorage.getItem('token');

    if(token){

      return token;
    }
    else{

      return '';
    }
  }


  isLoginRequired() : Observable<any>{

    const token = localStorage.getItem('token');

    if(token){

      let model : TokenRequestDTO = {
    
        token : token
    }
  
    return this.tokenExpired(model).pipe(
    
                
    
                switchMap(() => {
  
                  return of(true);
    
                   
            }),
    
            catchError((error)=>{
    
                if(error?.error?.message === 'Token is expired.'){
    
                    let model : RefreshTokenDTO = {
    
                        token : localStorage.getItem('token'),
                        refreshToken : localStorage.getItem('refreshToken')
                    };
    
                      return this.refreshToken(model).pipe(
    
                        switchMap((data)=>{
    
                        let response : LoginResponse = data.response;
    
                    
    
                        localStorage.setItem('token',response.jwtToken);
                        localStorage.setItem('refreshToken',response.refreshToken);
    
                       
                        return of(true);
    
                            
                            
    
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
    else{
  
      this.router.navigate(['/login']);
      return of(false);
  
    }
  
         
    
  }
}
