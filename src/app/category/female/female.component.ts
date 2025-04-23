import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserService } from 'src/app/user/user.service';
import { UserDTO } from 'src/app/models/DTOs/user-dto';
import { RefreshTokenDTO } from 'src/app/models/DTOs/refresh-token-dto';
import { LoginResponse } from 'src/app/models/login-response';
import { TokenRequestDTO } from 'src/app/models/DTOs/token-request-dto';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit{

  constructor(private http : HttpClient,private userService : UserService){}
 
 apiUrl : string = environment.apiUrl;

 
  
 ngOnInit(): void {

    
  
  
}
 
  

}
