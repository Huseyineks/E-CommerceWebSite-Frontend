import { Component, effect, OnInit} from '@angular/core';
import { UserService } from './user/user.service';
import { UserDTO } from './models/DTOs/user-dto';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isTokenValid : number = 0;
  productNumber : number = 2;

  constructor(private route : Router,private userService : UserService){

    effect(() =>{
      this.isTokenValid = this.userService.isTokenValid();
    
    })
  }
  ngOnInit(): void {

    let getToken : string | null  = localStorage.getItem('token');
    this.isTokenValid = getToken ? 1 : 0;

  }

 


 

  title = 'E-CommerceWebSite';

  


  logout() : void{
   

    

    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.isTokenValid = 0;

    
   
    
  }

  


}
