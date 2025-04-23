import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDTO } from '../../models/DTOs/user-dto';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm : FormGroup = new FormGroup({});

  tokenString : any;

  validationErrors = [];

   constructor(private userService : UserService,private router : Router){}

ngOnInit(): void {

  this.loginForm = new FormGroup({

    Username : new FormControl(''),

    Password : new FormControl('')
   

  });
  
}

   


  onSubmit(){

let user : UserDTO = this.loginForm.value;

this.userService.login(user).subscribe({
  next : () => {

    localStorage.setItem('login','true');
    
    this.userService.isTokenValid.set('1');
    
    this.router.navigate(['/home']);
    

   
  },
  error : (err) =>{

    
    this.validationErrors = err.error.errors;

    console.log(this.validationErrors);
  }
})

  }
}
