import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDTO } from '../model/DTOs/user-dto';
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
  next : (response) => {

    localStorage.setItem('token',response.token);
    localStorage.setItem('refreshToken',response.rToken);
    

    this.router.navigate(['']);

   
  },
  error : (err) =>{

    
    this.validationErrors = err.error.errors;

    console.log(this.validationErrors);
  }
})

  }
}
