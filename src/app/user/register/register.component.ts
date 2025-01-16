import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { UserDTO } from '../model/user-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm : FormGroup = new FormGroup({});

  constructor(private userService : UserService,private router : Router){}


  ngOnInit(): void {

    this.registerForm = new FormGroup({

      Username : new FormControl(''),

      Password : new FormControl(''),

      ConfirmPassword : new FormControl(''),

      Email : new FormControl(''),

      Neighbourhood : new FormControl(''),

      Street : new FormControl(''),

      City : new FormControl(''),

      PostalCode : new FormControl(''),

      Adress : new FormControl(''),

      PhoneNumber : new FormControl(''),

    });
    
  }








  onSubmit(){

    let newUser : UserDTO = this.registerForm.value;


    this.userService.register(newUser).subscribe({
      next : () => {

        this.router.navigate(['/login']);

       
      },
      error : (error) =>{

        alert("DAYI NOLUYOR");
      }
    })


  }

}
