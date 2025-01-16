import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDTO } from '../model/user-dto';
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

    

    this.router.navigate(['']);

   
  },
  error : () =>{

    
    alert(user.Username);
  }
})

  }
}
