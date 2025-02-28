import { Component, effect, OnInit} from '@angular/core';
import { UserService } from './user/user.service';
import { UserDTO } from './models/DTOs/user-dto';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isTokenValid : number = 0;
  
  cartItemNumber : number = 0;

  constructor(private route : Router,private userService : UserService,private cartService : CartService){

    effect(() =>{
      this.isTokenValid = this.userService.isTokenValid();
      this.cartItemNumber = this.cartService.itemNumber();
    
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
