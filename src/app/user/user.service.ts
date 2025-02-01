import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './model/DTOs/user-dto';
import { environment } from 'src/environments/environment.development';
import { RefreshTokenDTO } from './model/DTOs/refresh-token-dto';
import { TokenRequestDTO } from './model/DTOs/token-request-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl;

  private headers = new HttpHeaders().set('Authentication','true');
   

  register(userDTO : UserDTO) : Observable<void>{


    return this.http.post<void>(this.apiUrl + '/api/Auth/api/register',userDTO,{headers : this.headers});
    
  }

  login(userDTO : UserDTO) : Observable<any>{


    return this.http.post<any>(this.apiUrl + '/api/Auth/api/login',userDTO,{headers : this.headers});
  }

  tokenExpired(model : TokenRequestDTO) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Auth/api/tokenExpired',model);
  }

  refreshToken(model : RefreshTokenDTO) : Observable<any>{

    return this.http.post<any>(this.apiUrl + '/api/Auth/api/refreshToken',model);


  }
}
