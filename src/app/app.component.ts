import { Component, effect, OnInit} from '@angular/core';
import { UserService } from './user/user.service';
import { UserDTO } from './models/DTOs/user-dto';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isTokenValid : string = '';
  
  cartItemNumber : number = 0;

  isAdminPage = false;

  constructor(private route : Router,private userService : UserService,private cartService : CartService,private router : Router){

    
    effect(() =>{
      this.isTokenValid = this.userService.isTokenValid();
      this.cartItemNumber = this.cartService.itemNumber();
    
    })
  }
  ngOnInit(): void {

    
    let login : string | null  = localStorage.getItem('login');
   
    this.userService.isTokenValid.set(login ? '1' : '0');



    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isAdminPage = this.router.url.includes('/admin');
    });
    
  }

 


 

  title = 'E-CommerceWebSite';

  


  logout() : void{
   

    this.userService.logout().subscribe({

      next : () => {

        console.log("İşlem başarıyla tamamlandı.")

        
      },

      error : () => {

        console.error("İşlem tamamlanamadı.");
      }
    });
    
    localStorage.removeItem('login');
    
    this.isTokenValid = '0';

    
   
    
  }

  


}
