import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './model/user-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl;

   

  register(userDTO : UserDTO) : Observable<void>{


    return this.http.post<void>(this.apiUrl + '/api/Auth/api/register',userDTO);
    
  }

  login(userDTO : UserDTO) : Observable<void>{


    return this.http.post<void>(this.apiUrl + '/api/Auth/api/login',userDTO);
  }
}
