import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserService } from 'src/app/user/user.service';
import { UserDTO } from 'src/app/user/model/DTOs/user-dto';
import { RefreshTokenDTO } from 'src/app/user/model/DTOs/refresh-token-dto';
import { LoginResponse } from 'src/app/user/model/login-response';
import { TokenRequestDTO } from 'src/app/user/model/DTOs/token-request-dto';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit{

  constructor(private http : HttpClient,private userService : UserService){}
 
 apiUrl : string = environment.apiUrl;

 username : string = "";
 email : string = "";

 userDTO : UserDTO = {

 };

 refreshTokenDTO : RefreshTokenDTO = {

  refreshToken : localStorage.getItem('refreshToken'),
  token : localStorage.getItem('token')

 };

 loginResponse : LoginResponse = {

  isLoggedIn : false,
  jwtToken : 'sa',
  refreshToken : 'as'

 };

 token : TokenRequestDTO = {

  token : "sa"

 }
  
 ngOnInit(): void {

  

  // this.userService.refreshToken(this.refreshTokenDTO).subscribe({

  //   next : (response) =>{

  //     this.loginResponse = response.response;

  //     alert(this.loginResponse.jwtToken);
  //   },

  //   error : () =>{

  //     alert("sa");
  //   }
  // })

  this.userService.tokenExpired(this.token).subscribe();
    
    
  
  
  
}
 
  

}
